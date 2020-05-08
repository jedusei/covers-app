import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
}