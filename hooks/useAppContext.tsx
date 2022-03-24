import React, { useContext, useEffect, useMemo, useState } from "react";

import { FolderItem, ItemDay } from "../types";
import {
    clearStoreSpends,
    getStoreFolders,
    getStoreSpends,
    setStoreSpends,
} from "../utils/storageManipulate";

type ContextType = {
    folders: FolderItem[];
    todaySpend: ItemDay[];
    onChangeSpend: (newSum: number, idI: any) => void;
    getData: () => void;
    clearSpends: () => void;
};

export const AppContext = React.createContext<ContextType>({
    folders: [],
    todaySpend: [],
    onChangeSpend: () => {},
    getData: () => {},
    clearSpends: () => {},
});

const AppProvider = ({ children }: any) => {
    const [folders, setFolders] = useState<FolderItem[]>([]);
    const [totalSpend, setTotalSpend] = useState<ItemDay[]>([]);
    const [todaySpend, setTodaySpend] = useState<ItemDay[]>([]);

    const getData = async () => {
        const storeFolders = await getStoreFolders();
        const { todayItems, total } = await getStoreSpends(storeFolders);

        setFolders(storeFolders);
        setTodaySpend(todayItems);
        setTotalSpend(total);
    };

    const onChangeSpend = async (newSum: number, idI: any) => {
        const { id, date, index } = todaySpend.find((i) => i.id === idI);

        const restItems = totalSpend.filter((j) => j.id !== idI);

        await setStoreSpends([
            ...restItems,
            {
                id,
                index,
                date,
                sum: newSum,
            },
        ]);
        await getData();
    };

    const clearSpends = async () => {
        await clearStoreSpends();
        await getData();
    };

    useEffect(() => {
        getData();
    }, []);

    const value = useMemo(
        () => ({
            folders,
            todaySpend,
            getData,
            onChangeSpend,
            clearSpends,
        }),
        [folders, todaySpend, totalSpend],
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider };

export const useAppContext = () => {
    return useContext(AppContext);
};
