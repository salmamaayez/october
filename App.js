import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import ProductScreen from "./src/screens/ProductsScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";

const App = () => {
  const [screen, setScreen] = useState("products"); // Valeur initiale 'products'

  const renderScreen = () => {
    switch (screen) {
      case "products":
        return <ProductScreen />;
      case "productDetails":
        return <ProductDetailsScreen />;
      case "shoppingCart":
        return <ShoppingCart />;
      default:
        return <ProductScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <Button
        title="Go to Product Details"
        onPress={() => setScreen("productDetails")}
      />
      <Button
        title="Go to Shopping Cart"
        onPress={() => setScreen("shoppingCart")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
