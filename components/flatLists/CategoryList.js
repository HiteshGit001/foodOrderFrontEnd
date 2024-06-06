import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, Image, Pressable } from 'react-native'
import { BASE_URL, GET_CATEGORY_URL } from '../../api/api'
import { get } from '../../api/http'
import * as RootNavigation from "../../util/routes";

const CategoryList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        let res = get(GET_CATEGORY_URL).then((res) => setData(res.data));
    }, [])

    const renderItem = ({ item }) => {
        return (
            <Pressable
                onPress={() => RootNavigation.navigate("Resturents", { category_id: item._id })}
                style={{ marginRight: 10 }}>
                <View
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 1,
                        shadowRadius: 5,
                    }}
                >
                    <Image source={{ uri: item.category_img }} height={43} width={43} />
                </View>
                <Text style={{ marginTop: 10 }}>{item.category_name}</Text>
            </Pressable>
        )
    }
    return (
        <View style={{ paddingVertical: 20 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                horizontal
            />
        </View>
    )
}

export default CategoryList