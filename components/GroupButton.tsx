import React, { useState, useMemo } from "react";
import { Modal, StyleSheet } from "react-native";

import { Text, View, TouchableOpacity, AntIcon } from "./Themed";
import MonoText from "./StyledText";
import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";

const GroupButton = ({ onSubmit, sum, id, title }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");

    const newSum = useMemo(() => {
        return Number(sum) + Number(input);
    }, [input, sum]);

    const onPressOpen = () => {
        setInput("");
        setIsOpen(!isOpen);
    };

    const onAccept = () => {
        setIsOpen(false);
        onSubmit(newSum, id);
    };

    return (
        <>
            <TouchableOpacity
                onPress={onPressOpen}
                style={styles.getStartedContainer}
            >
                <AntIcon name="hdd" size={24} />
                <MonoText>{title}</MonoText>
                <MonoText>{sum}</MonoText>
            </TouchableOpacity>

            <Modal animationType="fade" transparent={true} visible={isOpen}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text
                            lightColor="rgba(0,0,0,0.8)"
                            darkColor="rgba(255,255,255,0.8)"
                        >
                            Today total spend for {title}:
                        </Text>

                        <MonoText style={styles.modalText}>{newSum}</MonoText>

                        <StyledInput
                            value={input}
                            onChangeText={setInput}
                            keyboardType="phone-pad"
                        />

                        <View style={styles.footer}>
                            <StyledButton
                                onPress={onPressOpen}
                                style={styles.buttonClose}
                            >
                                <Text style={styles.textStyle}>Back</Text>
                            </StyledButton>

                            <StyledButton
                                onPress={onAccept}
                                style={styles.buttonAccept}
                            >
                                <Text style={styles.textStyle}>Accept</Text>
                            </StyledButton>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default GroupButton;

const styles = StyleSheet.create({
    getStartedContainer: {
        flexDirection: "column",
        alignItems: "center",
        width: "43%",
        borderStyle: "solid",
        borderRadius: 4,
        padding: 5,
        borderWidth: 1,
        elevation: 10,
        marginHorizontal: 10,
        marginVertical: 7,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(128,128,128,0.7)",
    },
    modalView: {
        margin: 20,
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        width: "80%",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonAccept: {
        backgroundColor: "#000",
        width: "48%",
    },
    buttonClose: {
        backgroundColor: "#a3a3a3",
        width: "48%",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
    },
    footer: {
        marginTop: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
