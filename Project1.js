import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyStyle = StyleSheet.create({
    ViewStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'black'
    }
});

const Project1 = () => {
    return (
        <View style={MyStyle.ViewStyle}>
            <Text style={MyStyle.textStyle}>
                Say hello
            </Text>
        </View>
    );
};

export default Project1;
