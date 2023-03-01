import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function SetPass({ navigation, SetPass }) {
  const [password, setPassword] = useState("");

  {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/icon.png")} />
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#445191"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#445191"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <Pressable
          style={styles.loginBtn}
          title="Go to Login"
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.Text}>Confirm</Text>
        </Pressable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginTop: 5,
    marginBottom: 100,
    width: 100,
    height: 100,
    borderRadius: 60,
  },

  inputView: {
    backgroundColor: "#E4E4E4",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 200,
    flex: 1,
    padding: 10,
    marginLeft: 5,
    alignItems: "center",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft: 10,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: "#445191",
  },
  Text: {
    fontSize: 16,
    lineHeight: 21,

    letterSpacing: 0.25,
    color: "white",
  },
});
