import { View, Text } from "react-native";
import { useEffect, useState } from "react";

export default function Footer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <View>
      <Text>Footer</Text>
      {
        <View>
          {data?.products?.map((item) => {
            <View key={item.id}>
              <Text style={{ fontSize: "24px" }}>{item.title}</Text>
              <Text style={{ fontSize: "18px" }}>{item.price}</Text>
            </View>;
          })}
        </View>
      }
    </View>
  );
}
