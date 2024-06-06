import React, { useState } from 'react'
import { View, Text, ScrollView, Image, FlatList } from "react-native"
import CustomInput from '../components/custom/CustomInput'
import Card from '../components/custom/Card'
import Start from '../util/svgs/Star'
import HotelsCard from '../components/ItemCards/HotelsCard'
import useAppSelector from '../hooks/useAppSelector'
import CategoryList from '../components/flatLists/CategoryList'

const Home = () => {
  const { userData } = useAppSelector((state) => state.auth);
  console.log(userData, "ksdf;isd")

  const [popularNear, setPopularNear] = useState([{
    image: "",
    title: "Drumsteak Thi Ha",
    description: "Western Cuisine, Fast Food",
    averagePrice: "$250",
    rating: "4.2"
  }, {
    image: "",
    title: "Drumsteak Thi Ha",
    description: "Western Cuisine, Fast Food",
    averagePrice: "$250",
    rating: "4.2"
  }]);

  const [category, setCategory] = useState()
  const renderPopular = ({ item }) => {
    return (
      <Card style={{ padding: 10, marginRight: 10 }} width={257}>
        <HotelsCard />
      </Card>
    )
  }
  return (
    <View>
      <View>
        <Text>Delivery to</Text>
      </View>
      <ScrollView>
        <Text>Popular Near You</Text>
        <FlatList
          data={popularNear}
          renderItem={renderPopular}
          horizontal={true}
        />
        <CategoryList />
      </ScrollView>
    </View>
  )
}

export default Home