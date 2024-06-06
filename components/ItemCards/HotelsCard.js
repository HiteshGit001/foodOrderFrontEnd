import React from 'react'
import { View, Text, Image } from 'react-native'
import Start from '../../util/svgs/Star'
import PillCard from '../custom/PillCard'

const HotelsCard = () => {
    return (
        <>
            <Image style={{ borderRadius: 20 }} height={160} width={230} source={{ uri: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                <View>
                    <Text>Drumsteak Thai Ha</Text>
                    <Text>Western Cuisine, Fast Food</Text>
                    <Text>$250</Text>
                </View>
                <View>
                    <PillCard Icon={<Start />} />
                </View>
            </View>
        </>
    )
}

export default HotelsCard