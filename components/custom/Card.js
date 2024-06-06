import React from 'react'
import { Pressable, View } from 'react-native'

const Card = ({ children,width,height,style, onPress=null }) => {
    return (
        <Pressable
        onPress={onPress}
         style={{
            borderWidth: 1,
            borderColor: "#DADADA",
            borderRadius: 20,
            width: width,
            height: height,
            ...(width&&{flexDirection:"column",justifyContent:"center",alignItems:"center"}),
            ...style
        }}>
            {children}
        </Pressable>
    )
}

export default Card