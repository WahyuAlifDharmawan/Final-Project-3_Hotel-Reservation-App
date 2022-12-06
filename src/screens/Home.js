import { StatusBar } from "expo-status-bar";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-date-picker";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Hotels } from "../features/rapidapi/rapidApiSlice";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { addItems, removeItems } from "../features/rapidapi/rapidApiSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default HomeScreen = () => {
  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotels.data);
  const savedItems = useSelector((state) => state.saved.savedItems);
  const [date, setDate] = useState(new Date(1598051730000));
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(Hotels());
  }, [dispatch]);

  const handleToSaved = (item) => {
    dispatch(addItems(item));
  };

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  // console.warn(savedItems);
  //   const handleProfile = () => {
  //     navigation.navigate("Profile", { name: "Hello Profile" });
  //   };

  //   const handleColumn = () => {
  //     navigation.navigate("Column", { name: "Hello Column" });
  //   };

  //   const handleText = () => {
  //     navigation.navigate("TextScreen", { name: "Hello Text" });
  //   };

  //   const handleScrollView = () => {
  //     navigation.navigate("ScrollView", { name: "Hello ScrollView" });
  //   };

  //   const handleFlatlist = () => {
  //     navigation.navigate("Flatlist", { name: "Hello FlatList" });
  //   };

  const MarginTop = () => <View style={{ marginTop: 15 }} />;

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      {/* <Text>Welcome Page Home</Text> */}
      <MarginTop />
      <View>
        <TextInput
          style={styles.inputText}
          placeholder="Where do you want to go?"
        />
        <MarginTop />
        <View style={styles.time}>
          <Button onPress={showDatepicker} title="Check-in-Date" />
          <Button onPress={showDatepicker} title="Check-out-Date" />
          {/* <Text>selected: {date.toLocaleString()}</Text> */}
        </View>

        <View style={styles.viewButton}>
          {/* <Button
            color="#ffe900"
            title="Search"
            // onPress={() => handleProfile()}
          /> */}
        </View>
        <MarginTop />
        <View>
          <Text style={styles.titleText}>Top Hotel Indonesia</Text>
          <ScrollView horizontal>
            {allHotels.map((hotel, index) => {
              return (
                <View
                  key={index}
                  style={{ width: 200, height: 500, paddingHorizontal: 5 }}
                >
                  <Image
                    source={{ uri: hotel?.image_url }}
                    style={{ width: 150, height: 150 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>{hotel?.name}</Text>
                  <Text style={{ fontSize: 12, color: "gray" }}>
                    {hotel?.label}
                  </Text>
                  <Button
                    title={
                      savedItems?.find((item) => item.name === hotel.name)
                        ? "Unsave"
                        : "Save"
                    }
                    onPress={() =>
                      savedItems?.find((item) => item.name === hotel.name)
                        ? handleToRemove(hotel)
                        : handleToSaved(hotel)
                    }
                  />
                  {/* <Button title="R" onPress={() => handleToRemove(hotel)} /> */}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 20,
  },

  inputText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    // paddingVertical: 10,
    paddingLeft: 10,
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});