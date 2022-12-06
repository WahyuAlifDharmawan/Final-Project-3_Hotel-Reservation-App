import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "../features/rapidapi/rapidApiSlice";

const SearchScreen = () => {
  const dispatch = useDispatch();

  const SearchHotels = useSelector((state) => state.search.data);

  const getSearchParams = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);

    const searchParams = params.get("text");
    return searchParams;
  };

  return (
    <View>
      <Text>Search</Text>
      <ScrollView horizontal>
        {SearchHotels.map((hotel, index) => {
          return (
            <View key={index} style={{ width: 200, paddingHorizontal: 5 }}>
              <Image
                source={{ uri: hotel?.image_url }}
                style={{ width: 150, height: 150 }}
              />
              <Text>{hotel?.name}</Text>
              {/* <Text>{hotel?.label}</Text> */}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;