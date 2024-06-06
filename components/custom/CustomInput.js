import React from 'react'
import { View, Text, TextInput, StyleSheet } from "react-native"

const CustomInput = (props) => {
    const { placeHolder, label, value, onChange } = props;
    return (
        <View style={{position:"relative",marginVertical:10}}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.container}
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
            />
        </View>
    )
}

export default CustomInput;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#979797",
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        fontSize: 20
    },

    label:{
        position:"absolute",
        fontSize:14,
        top:-10,
        left:20,
        backgroundColor:"white",
        padding:5,
        paddingHorizontal:10,
        zIndex:1
    }
});
