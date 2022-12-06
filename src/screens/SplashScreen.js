import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Button } from "react-native";

export default function SplashScreen({ navigation }) {
  const handleSplash = () => {
    navigation.navigate("Splash", { name: "Splash Screen" })
  }

    return (
      <View style={{backgroundColor: "#ffBA11", flex: 1}}>
      <View>
        <Text style={{padding: 150}}>
          Selamat datang di Hotel kelompok 3
        </Text>
        <View>
          <View style={{ flex: 1, marginHorizontal: 1 }}>
          <Button
              title='SplashScreen'
              color="#002B5B"
              onPress={() => handleSplash()}
            />
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
      </View>
    )
  }

