import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


const AppButton = ({title,onPress}) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer:{
        backgroundColor:"#19bced",
        height : 50,
        padding : 10,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 5,
        marginTop : '10%',
    },
    appButtonText:{
        color:'white',
        fontSize : 15,
    }
})


export default AppButton



