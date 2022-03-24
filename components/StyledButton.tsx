import React from "react";
import { Pressable, StyleSheet } from "react-native";

const StyledButton = ({ style, children, ...defaultProps }: any) => {
    return (
        <Pressable {...defaultProps} style={[style, styles.button]}>
            {children}
        </Pressable>
    );
};

export default StyledButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        minWidth: 100,
    },
});
