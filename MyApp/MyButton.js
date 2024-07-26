import React, { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

export const MyButton = () => {
    const [pressed, setPressed] = useState(false);

    return (
        <TouchableOpacity onPress={() => setPressed((p) => !p)}>
            <View
                style={{
                    width: 100,
                    height: 40,
                    backgroundColor: "yellow",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {pressed ? (
                    <ActivityIndicator size="small" color="black" />
                ) : (
                    <Text>Press</Text>
                )}
            </View>
        </TouchableOpacity>
    );
};


