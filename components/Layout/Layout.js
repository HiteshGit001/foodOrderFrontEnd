import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import Tabs from '../Tabs/Tabs'

const Layout = ({ children }) => {
    return (
        <>
            <View style={styles.container}>
                {children}
            </View>
            <View style={{position:"absolute",bottom:0}}>
                <Tabs />
            </View>
        </>
    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 15,
        //   flexDirection:"column",
        //   justifyContent:"space-between",
        //   alignItems:"center"
    },
});