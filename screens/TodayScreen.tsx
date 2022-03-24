import React, { useMemo } from "react";
import { StyleSheet } from "react-native";

import { useAppContext } from "../hooks/useAppContext";
import { View } from "../components/Themed";
import GroupButton from "../components/GroupButton";
import MonoText from "../components/StyledText";

const TodayScreen = () => {
    const { folders, todaySpend, onChangeSpend } = useAppContext();

    const total = useMemo(() => {
        let sumAmount = 0;

        todaySpend.forEach((t) => (sumAmount += t.sum));

        return sumAmount;
    }, [todaySpend]);

    return (
        <View style={styles.container}>
            <MonoText style={styles.title}>Total: {total}</MonoText>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.getStartedContainer}>
                {/* TODO */}
                {folders.map((item) => {
                    const send = folders.find((t) => t.index === item.index);

                    return (
                        <GroupButton
                            key={item.id}
                            onSubmit={onChangeSpend}
                            {...send}
                            {...item}
                        />
                    );
                })}
            </View>
        </View>
    );
};

export default TodayScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    getStartedContainer: {
        alignItems: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        textAlign: "center",
        marginHorizontal: 10,
        fontSize: 17,
        lineHeight: 24,
    },
});
