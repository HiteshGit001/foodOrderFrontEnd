import React from 'react'
import { View, Text, Image } from 'react-native'
import Start from '../../util/svgs/Star';
import PillCard from '../custom/PillCard';
import Card from '../custom/Card';
import * as RootNavigation from "../../util/routes";

const ItemCard = (props) => {
    const { item } = props;
    const onPress = (item) => {
        console.log(item, "item");
        RootNavigation.navigate("Details", { category_id: item._id })
    }
    return (
        <Card onPress={()=>onPress(item)} style={{ padding: 10, marginRight: 10 }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
            }}>
                <View>
                    <Image style={{ width: 113, height: 102, borderRadius: 10 }} source={{ uri: item?.seller_img }} />
                </View>
                <View>
                    <Text style={{fontSize:16,fontWeight:500}}>{item?.name}</Text>
                    <Text style={{fontSize:14,fontWeight:400}}>{item?.seller_dis}</Text>
                </View>
                <View>
                    <PillCard Icon={<Start />} />
                </View>
            </View>
        </Card>
    )
}

export default ItemCard