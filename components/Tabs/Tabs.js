import React from 'react'
import { View, Text, StyleSheet, Pressable } from "react-native"
import { Dimensions } from 'react-native';
import TabBar from '../../util/svgs/TabBar'
import Notification from '../../util/svgs/Notification'
import Home from '../../util/svgs/Home'
import Favorate from '../../util/svgs/Favorate'
import Cart from '../../util/svgs/Cart'
import PrimeIcon from '../../util/svgs/PrimeIcon'
import { useRoute } from '@react-navigation/native';
import * as RootNavigation from "../../util/routes";

const Tabs = () => {
    const tabItem = [
        {
            name: "Home",
            icon: Home,
        },
        {
            name: "Favorite",
            icon: Favorate,
        },
        {
            name: "Primary",
            icon: PrimeIcon,
            isPrimary: true,
        },
        {
            name: "Cart",
            icon: Cart,
        },
        {
            name: "Notification",
            icon: Notification,
        }
    ]
    const width = Dimensions.get("window").width;

    const route = useRoute();


    return (
        <View style={styles.container}>
            <View>
                <TabBar width={width} />
                <View style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        position: "absolute",
                        top: -60,
                        width: 430,
                        paddingHorizontal: 20
                    }}>
                        {
                            tabItem.map((ele) => {
                                return (
                                    <Pressable
                                        onPress={() => RootNavigation.navigate(ele.name)}
                                        style={{ ...(ele?.isPrimary && { position: "relative", top: "-15%", left: 2 }) }}>
                                        <ele.icon stroke={route.name === ele.name ? "#EF2E2E" : "#000"} />
                                    </Pressable>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Tabs

const styles = StyleSheet.create({
    container: {

        width: "100%",
        backgroundColor: "transparent",
        position: "relative"
    },
});
