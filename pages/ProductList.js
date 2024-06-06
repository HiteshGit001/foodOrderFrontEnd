import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from "react-native"
import { GET_SELLERS_LIST_URL } from '../api/api';
import { get } from '../api/http';
import ItemCard from '../components/ItemCards/ItemCard';

const ProductList = () => {
    const [productList, setProductList] = useState([])
    const route = useRoute();
    const { category_id } = route.params;

    const getList = async () => {
        console.log("first")
        await get(GET_SELLERS_LIST_URL).then((res) => {
           setProductList(res.data);
        })
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <View>
            <Text>
                ProductList fldsf
            </Text>
            <FlatList
                data={productList}
                renderItem={({item})=><ItemCard item={item} />}
                />
        </View>
    )
}

export default ProductList