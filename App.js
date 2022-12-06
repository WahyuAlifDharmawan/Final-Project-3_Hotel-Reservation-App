import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Home from "./src/screens/Home";
import { store } from "./src/app/store";
import SplashScreen from "./src/screens/SplashScreen";
import About from "./src/screens/About";
import DetailsAbout from "./src/screens/DetailsAbout";
import Nav from "./src/components/Nav";
import Profile from "./src/screens/Profile";
import History from "./src/screens/History";
import Whistlist from "./src/screens/Whistlist";
import Search from "./src/screens/Search";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
          name="Splash"
          component={SplashScreen}
        
        />

          {/* <Stack.Screen
            name="Search"
            component={Search}
            options={{ title: "Search" }}
          /> */}

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />

          <Stack.Screen
            name="Whislist"
            component={Whistlist}
            options={{ title: "Whistlist" }}
          />

          <Stack.Screen
            name="History"
            component={History}
            options={{ title: "History" }}
          />

          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile" }}
          />

          <Stack.Screen
            name="About"
            component={About}
            options={{ title: "About Us" }}
          />
          <Stack.Screen
            name="DetailsAbout"
            component={DetailsAbout}
            options={{ title: "DetailsAbout" }}
          />
        </Stack.Navigator>
      </Provider>
      {/* <BottomNav /> */}
      <Nav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});