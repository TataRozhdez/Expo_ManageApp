import React from "react";
import { StyleSheet } from "react-native";

import { TextInput, TextInputProps } from "./Themed";

const StyledInput = (props: TextInputProps) => {
    return <TextInput {...props} style={[props.style, styles.input]} />;
};

export default StyledInput;

const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
});
