import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
const ProductCard = ({ image, category, title, price, description }) => {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();
  return (
    <View className="w-full bg-white dark:bg-slate-700 rounded-3xl p-5 my-5 shadow-md dark:shadow-2xl shadow-black/75 dark:shadow-lime-500 border border-slate-100 dark:border-lime-500/50">
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white mb-1">
          {title}
        </Text>
        <View className="flex-row justify-between px-1 my-1">
          <Text className="text-2xl font-semibold dark:text-white">
            ${(price * count).toFixed(2)}
          </Text>
          <View className="flex-row space-x-3 items-center ">
            <Text
              className="text-lg font-semibold bg-slate-400 w-7 text-center rounded-md text-slate-100"
              onPress={() => setCount(count - 1)}
            >
              -
            </Text>
            <Text className="dark:text-white font-semibold text-lg">
              {count}
            </Text>
            <Text
              className="text-lg font-semibold bg-slate-400 w-7 text-center rounded-md text-slate-100"
              onPress={() => setCount(count + 1)}
            >
              +
            </Text>
          </View>
        </View>
        <Text className="text-center mt-2 dark:text-white" numberOfLines={2}>
          {description}
        </Text>
        <TouchableOpacity className="bg-slate-800 dark:bg-lime-500 py-4 rounded-2xl mt-2 ">
          <Text className="text-center text-white font-semibold uppercase">
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
