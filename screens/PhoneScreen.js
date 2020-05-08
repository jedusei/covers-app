import React from 'react';
import {
    View, Text, StyleSheet, TouchableNativeFeedback,
    TextInput, StatusBar, ImageBackground, ActivityIndicator
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const styles = StyleSheet.create({
    bg_image: {
        flex: 1,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#00000078'
    },
    h1: {
        color: '#fff',
        fontSize: 70,
        fontWeight: 'bold'
    },
    h2: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    },
    h3: {
        textAlign: 'center',
        color: '#ffffffc8',
        fontSize: 12
    },
    text_field: {
        flexDirection: 'row',
        alignSelf: "stretch",
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 10,
        padding: 15,
        backgroundColor: 'white'
    },
    btn: {
        alignSelf: "stretch",
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#3baf00'
    },
    btn_disabled: {
        alignSelf: "stretch",
        alignItems: 'center',
        paddingVertical: 15,
        opacity: 0.8,
        backgroundColor: '#afafaf'
    }
});

export default function PhoneScreen() {
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [isValid, setValid] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false);
    return (
        <ImageBackground source={require('../assets/covid-19-bg.jpg')} style={styles.bg_image}>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
            <View style={styles.container}>
                <Text style={styles.h1}>COVERS</Text>
                <Text style={styles.h2}>(COVID-19 EMERGENCY RESPONSE SYSTEM)</Text>
                <Text style={styles.h3}>Join the effort by well-meaning Africans using technology to slow down and eventually halt the spread of COVID-19.</Text>
                <View style={styles.text_field}>
                    <Text style={{ opacity: 0.5, marginRight: 17 }}>Phone Number:</Text>
                    <TextInput
                        keyboardType="phone-pad"
                        maxLength={10}
                        value={phoneNumber}
                        style={{ flex: 1, fontSize: 20 }}
                        onChangeText={text => {
                            setPhoneNumber(text);
                            setValid(/^0(2[034678]|5[045679])[0-9]{7}/.test(text));
                        }} />
                    {isValid ||
                        <FontAwesome name='warning' size={15} color="#dede53" />
                    }
                </View>
                <TouchableNativeFeedback
                    disabled={!isValid}
                    onPress={() => {
                        if (!isLoading) {
                            setLoading(true);
                            setTimeout(setLoading, 2000, false);
                        }
                    }}>
                    <View style={isValid ? styles.btn : styles.btn_disabled}>
                        {isLoading ?
                            <ActivityIndicator size={27} color="#fff" />
                            :
                            <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Get Started</Text>
                        }
                    </View>
                </TouchableNativeFeedback>
            </View>
        </ImageBackground>
    );
} 