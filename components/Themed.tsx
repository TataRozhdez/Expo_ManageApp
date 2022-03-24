import React from "react";
import {
    Text as DefaultText,
    View as DefaultView,
    TextInput as DefaultTextInput,
    TouchableOpacity as DefaultTouchableOpacity,
} from "react-native";
import { AntDesign as DefaultAntDesign } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export const useThemeColor = (
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) => {
    const theme = useColorScheme();
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
};

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type AntIconProps = ThemeProps & any;
export type ViewProps = ThemeProps & DefaultView["props"];
export type TextInputProps = ThemeProps & DefaultTextInput["props"];
export type TouchableOpacityProps = ThemeProps &
    DefaultTouchableOpacity["props"];

export const Text = (props: TextProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const View = (props: ViewProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background",
    );

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const TextInput = (props: TextInputProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background",
    );

    const color = useThemeColor({ light: darkColor, dark: lightColor }, "text");

    return (
        <DefaultTextInput
            style={[{ backgroundColor }, { color }, style]}
            {...otherProps}
        />
    );
};

export const TouchableOpacity = (props: TouchableOpacityProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "folder",
    );

    const borderColor = useThemeColor(
        { light: darkColor, dark: lightColor },
        "border",
    );

    return (
        <DefaultTouchableOpacity
            style={[{ backgroundColor }, { borderColor }, style]}
            {...otherProps}
        />
    );
};

export const AntIcon = (props: AntIconProps) => {
    const { lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor(
        { light: lightColor, dark: darkColor },
        "tabIconDefault",
    );

    return <DefaultAntDesign color={color} {...otherProps} />;
};
