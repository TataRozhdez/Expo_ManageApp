import React from "react";
import { StyleSheet, Button } from "react-native";

import { Text, View } from "../components/Themed";
import { useAppContext } from "../hooks/useAppContext";

const SettingsScreen = () => {
    const { clearSpends } = useAppContext();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SettingsScreen</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <Button title="CLEAR LS" onPress={clearSpends} color="#FFF456" />
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
