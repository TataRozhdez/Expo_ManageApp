/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    Today: {
                        screens: {
                            TodayScreen: "today",
                        },
                    },
                    Stats: {
                        screens: {
                            StatsScreen: "stats",
                        },
                    },
                    Settings: {
                        screens: {
                            SettingsScreen: "settings",
                        },
                    },
                },
            },
            Modal: "modal",
            NotFound: "*",
        },
    },
};

export default linking;
