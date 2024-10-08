import { FlatList, View, Image, Text } from "react-native";
import React from "react";

const Mood = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View className="mr-4">
          <View className="w-[300px] h-[350px] relative">
            <Image
              source={item.source}
              className="w-full h-full"
              resizeMode="contain"
            />
            <Text className="text-white text-2xl font-bold absolute bottom-7 left-[20%] z-10">
              {item.title}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

export default Mood;
