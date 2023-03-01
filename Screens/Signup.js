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
import axios from "axios";

export default function Signup({ navigation, SignUp, onSubmit, error }) {
  const [Fullname, setname] = useState("");
  const [password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [SU, setSU] = useState("");

  const register = (Fullname, password, PhoneNumber, Email, SU) => {
    if (!Fullname && !password && !PhoneNumber && !Email && !SU)
      alert("Please enter all the fields ");
    else {
      axios
        .post("http://127.0.0.1:8000/api/app/user/")
        .the((response) => {
          console.log(response.data);
        })
        .catch((e) => console.log(e.meassage));
    }
  };

  {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/icon.png")} />
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Full Name"
            placeholderTextColor="#445191"
            onChangeText={(Fullname) => setname(Fullname)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Phone Number"
            placeholderTextColor="#445191"
            onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="E-mail"
            placeholderTextColor="#445191"
            onChangeText={(Email) => setEmail(Email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="School/University Name"
            placeholderTextColor="#445191"
            onChangeText={(SU) => setSU(SU)}
          />
        </View>
        <Layout>
          <View style={styles.NextBtn}>
            <Title text="Next" />
            {!!successHessage && (
              <Text style={styles.text}> {successilessage} </Text>
            )}
            <Form signup={true} onSubmit={Signup} error={errorlessage} />
          </View>
        </Layout>
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
    align: "center",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft: 10,
  },

  NextBtn: {
    width: "80%",
    borderRadius: 5,
    height: 25,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 200,
    backgroundColor: "#445191",
  },
  Text: {
    fontSize: 18,
    lineHeight: 21,

    letterSpacing: 0.25,
    color: "white",
  },
});
