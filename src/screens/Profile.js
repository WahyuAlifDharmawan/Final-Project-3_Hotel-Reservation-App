import React from "react";
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import CheckBox from "expo-checkbox";
import { useState } from "react";
// import { useFonts, MontSerrat_300Light, MontSerrat_400Regular, MontSerrat_500Medium, MontSerrat_700Bold, MontSerrat_900Black,} from "@expo-google-fonts/montserrat";
// import { JosefinSans_300Light, JosefinSans_400Regular, JosefinSans_500Medium,} from "@expo-google-fonts/josefin-sans"
import AppLoading from "expo-app-loading"

const Profile = () => {
  const [email, setEmail] = useState("");
  // console.log(email)
  const [password, setPassword] = useState("");
  // console.log(password)
  const [agree, setAgree] = useState(false);
  console.log(email, password)

  const submit = () => {
    // return Alert.alert(email, password);
    if (email === "user@hotel.com" && password === "user123"){
      Alert.alert('Anda telah login');
    }else{
      Alert.alert('Email dan password anda salah')
    }
  };

  // let [fontLoaded, error] = useFonts
  // ({
  //   MontSerrat_400Regular, 
  //   MontSerrat_500Medium, 
  //   MontSerrat_700Bold, 
  //   JosefinSans_400Regular, 
  //   JosefinSans_500Medium,
  // });

  // if(!fontLoaded) {
  //   return
  //   <AppLoading />;

  // }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>
        Login Form
      </Text>
      <Text style={styles.description}>
        Silahkan Login
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>
          Enter your email
        </Text>
        <TextInput style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
          onChangeText={(actualData) => setEmail(actualData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>
          Enter your password
        </Text>
        <TextInput style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(actualData) => setPassword(actualData)}
        />
      </View>
      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          Saya sudah setuju dengan ketentuan
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={() => submit()}
        >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
  },
  buttonStyle: {
    alignItems: "center",
    marginTop: 20,
    height: 40,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  wrapper: {
    marginTop: 10
  }
})

export default Profile;
