import React from "react";
import { FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { products } from "../utils/products";
const ProductList = () => {
  return (
    <FlatList
      className="mb-8"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 15 }}
      data={products}
      keyExtractor={(producto) => producto.id}
      renderItem={({ item }) => <ProductCard {...item} />}
    />
  );
};

export default ProductList;
