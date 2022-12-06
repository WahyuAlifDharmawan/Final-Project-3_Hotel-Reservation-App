import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Button, StyleSheet, View, Pressable } from "react-native";


const Nav = () => {
  const navigation = useNavigation();
  const handleAboutUs = () => {
    navigation.navigate("About", { name: "Hello About Us" });
  };

  const handleHome = () => {
    navigation.navigate("Home", { name: "Hello Home Screen" });
  };

  const handleWhislist = () => {
    navigation.navigate("Whislist", { name: "Hello Whislist" });
  };

  const handleHistory = () => {
    navigation.navigate("History", { name: "Hello History" });
  };

  const handleProfile = () => {
    navigation.navigate("Profile", { name: "Hello Profile" });
  };

  return (
    <View style = {styles.container}>
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
        <Pressable onPress={() => handleHome()}>
           <Text style={styles.ViewText}>Home</Text>
        </Pressable>

        <Pressable onPress={() => handleWhislist()}>
           <Text style={styles.ViewText}>Whishlist</Text>
        </Pressable>

        <Pressable onPress={() => handleHistory()}>
           <Text style={styles.ViewText}>History</Text>
        </Pressable>

        <Pressable onPress={() => handleProfile()}>
           <Text style={styles.ViewText}>Profile</Text>
        </Pressable>

        <Pressable onPress={() => handleAboutUs()}>
           <Text style={styles.ViewText}>About Us</Text>
        </Pressable>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 30,
  },

  NavBar: {
    flexDirection: "row",
    backgroundColor: '#c3cfff',
    width: '90%',
    height: '200%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 30,
  },
  
  ViewText: {
    fontSize: 15,
    color:'black',
  },
});

export default Nav;