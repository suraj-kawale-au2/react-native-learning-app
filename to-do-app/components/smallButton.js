import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";


const SmallButton = ({title,onPress}) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer:{
        backgroundColor:"#19bced",
        padding : 10,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 5,
        marginTop : 5,
    },
    appButtonText:{
        color:'white',
        fontSize : 15,
    }
})


export default SmallButton;