import React from 'react'
import { Text, View } from 'react-native'

const PillCard = (props) => {
    const { Icon } = props;
    return (
        <View>
            <View style={{ backgroundColor: "green", gap: 10, borderRadius: 5, paddingHorizontal: 5, paddingVertical: 5, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ color: "white" }}>4.2</Text>
                {Icon}
            </View>
        </View>
    )
}

export default PillCard