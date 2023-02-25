import { View, Text } from "react-native";
import React from "react";
import { Button, Image } from "react-native";
import { useGetProductsQuery } from "../features/APISlice";
import { useDispatch } from "react-redux";
import { addItem } from "../features/CartSlice";

export default function Home({ navigation }) {
  const { data, error, loading } = useGetProductsQuery();
  return (
    <View>
      <Button title="Cart" onPress={() => navigation.navigate("Cart")}>
        Cart
      </Button>

      <View>
        {data?.products?.map((item) => {
          <View key={item.id}>
            <Text style={{ fontSize: "24px" }}>{item.title}</Text>
            <Text style={{ fontSize: "18px" }}>{item.price}</Text>
            <Button
              title="Add to Cart"
              onPress={() =>
                console.log({
                  id: item.id,
                  price: item.price,
                  title: item.title,
                })
              }
            ></Button>
            <Button
              title="Add to Cart"
              onPress={() =>
                console.log({
                  id: item.id,
                  price: item.price,
                  title: item.title,
                })
              }
            ></Button>
          </View>;
        })}
      </View>
    </View>
  );
}
