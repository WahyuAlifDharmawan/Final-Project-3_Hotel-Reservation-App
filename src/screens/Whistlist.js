import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { addItems, removeItems } from "../features/rapidapi/rapidApiSlice";
import { useDispatch, useSelector } from "react-redux";

const Whistlist = () => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state) => state.saved.savedItems);

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
  };

  return (
    <View style={styles.container}>
      {/* <Text>Whishlits</Text> */}

      <ScrollView>
        {savedItems.map((hotel, index) => {
          return (
            <View
              key={index}
              style={{
                width: 200,
                paddingVertical: 5,
                flexDirection: "row",
              }}
            >
              <Image
                source={{ uri: hotel?.image_url }}
                style={{ width: 100, height: 100, borderRadius: 100}}
              />

              <View style={{ paddingHorizontal: 10 }}>
                <Text>{hotel?.name}</Text>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  {hotel?.label}
                </Text>
                <Pressable
                  onPress={() =>
                    savedItems?.find((item) => item.name === hotel.name)
                      ? handleToRemove(hotel)
                      : handleToSaved(hotel)
                  }
                >
                  {savedItems?.find((item) => item.name === hotel.name) ? (
                    <Image
                      style={{ width: 35, height: 35 }}
                      source={require("../../assets/Favorite1.png")}
                    />
                  ) : (
                    <Image
                      style={{ width: 35, height: 35 }}
                      source={require("../../assets/Favorite.png")}
                    />
                  )}
                </Pressable>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    marginVertical: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 5,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default Whistlist;