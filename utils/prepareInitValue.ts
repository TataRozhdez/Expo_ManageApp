import uuid from "react-native-uuid";

import { INIT_STORAGE_FOLDERS } from "../hooks/context.config";
import { FolderItem, ItemDay } from "../types";
import { getToday } from "./daysManipulate";

export const prepareInitFolders = () => {
    const value: FolderItem[] = [];

    INIT_STORAGE_FOLDERS.forEach((folder) => {
        value.push({ ...folder, id: uuid.v4() });
    });

    return value;
};

export const prepareInitSpends = (folders: FolderItem[]) => {
    const date = getToday();
    const value: ItemDay[] = [];

    folders.forEach(({ id, index }) => {
        value.push({ id, index, date, sum: 0 });
    });

    return value;
};
