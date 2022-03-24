import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEY_DAYS, STORAGE_KEY_FOLDERS } from "../hooks/context.config";
import { prepareInitFolders, prepareInitSpends } from "./prepareInitValue";
import { getToday } from "./daysManipulate";
import { FolderItem, ItemDay } from "../types";

export const getStoreFolders = () => {
    return AsyncStorage.getItem(STORAGE_KEY_FOLDERS)
        .then((res) => {
            if (res === null) {
                return prepareInitFolders();
            }

            return JSON.parse(res);
        })
        .catch((err) => {
            alert(err);
            return [];
        });
};

export const getStoreSpends = (storeFolders: FolderItem[]) => {
    const initToday = prepareInitSpends(storeFolders);

    return AsyncStorage.getItem(STORAGE_KEY_DAYS)
        .then((res) => {
            if (res !== null) {
                const total = JSON.parse(res);
                const today = getToday();

                const totalToday = total.filter(
                    (t: ItemDay) => t.date === today,
                );
                const todayItems = totalToday.length ? totalToday : initToday;

                return { todayItems, total };
            }
            return { todayItems: initToday, total: initToday };
        })
        .catch((err) => {
            alert(err);
            return { todayItems: initToday, total: initToday };
        });
};

export const setStoreFolders = (value: any) => {
    const jsonValue = JSON.stringify(value);

    return AsyncStorage.setItem(STORAGE_KEY_FOLDERS, jsonValue);
};

export const setStoreSpends = (value: any) => {
    const jsonValue = JSON.stringify(value);

    return AsyncStorage.setItem(STORAGE_KEY_DAYS, jsonValue);
};

export const clearStoreFolders = () => {
    return AsyncStorage.removeItem(STORAGE_KEY_FOLDERS);
};

export const clearStoreSpends = () => {
    return AsyncStorage.removeItem(STORAGE_KEY_DAYS);
};
