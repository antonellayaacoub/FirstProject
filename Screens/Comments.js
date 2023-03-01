import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Comments({ navigation, Comments }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/icon.png")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your Name"
          placeholderTextColor="#445191"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput1}
          placeholder="Write a comment !"
          placeholderTextColor="#445191"
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <Pressable
        style={styles.loginBtn}
        title="Go to HomePage"
        onPress={() => navigation.navigate("More")}
      >
        <Text style={styles.Text}> Send</Text>
      </Pressable>
    </View>
  );
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
    width: 200,
    height: 200,
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
  inputView1: {
    backgroundColor: "#E4E4E4",
    borderRadius: 30,
    width: "70%",
    height: 150,
    marginBottom: 20,

    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: -150,
  },
  TextInput1: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: -150,
    marginBottom: 100,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft: 10,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 40,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: "#445191",
  },
  Signup_Button: {
    height: 30,
    marginBottom: 30,
    marginLeft: 10,
  },
  Text: {
    fontSize: 16,
    lineHeight: 21,

    letterSpacing: 0.25,
    color: "#fff",
  },
});
