import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./features/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  const [someState, setSomeState] = useState("state value");
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* <View style={styles.container}> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

{
  /* <Header someState = {someState} />
      <Text style={styles.header}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Footer /> 
    </View>*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "green",
    fontSize: "30px",
  },
});
