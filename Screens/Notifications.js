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
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import icon from "../assets/icon.png";
import { CustomCard } from "./CustomCard";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Notifications({ navigation, Notifications }) {
  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <Text
          style={{
            position: "absolute",
            top: -50,
            textAlign: "center",
            fontSize: 30,
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Notifications
        </Text>
        <Image style={styles.image} source={require("../assets/icon.png")} />
      </View>
      <View style={styles.bottomview}>
        <CustomCard
          elevated={true}
          style={{
            backgroundColor: "#445191",
            marginHorizontal: 24,
            marginTop: 30,
            padding: 30,
            borderRadius: 50,
            height:300,
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ marginLeft: 10, fontWeight: "bold", color: "#FFF" }}
                >
                  Bus 2 is waiting on Station 1
                </Text>
                <FontAwesome5
                  style={{ marginLeft: 5 }}
                  style={{ opacity: 0.7, marginLeft: 10, color: "#fff" }}
                  name="clock"
                  size={15}
                />
                <Text
                  style={{ marginLeft: 5, fontWeight: "bold", color: "#fff" }}
                >
                  10:30
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ marginLeft: 10, fontWeight: "bold", color: "#FFF" }}
                >
                  Bus 4 is waiting on Station 6
                </Text>
                <FontAwesome5
                  style={{ marginLeft: 5 }}
                  style={{ opacity: 0.7, marginLeft: 10, color: "#fff" }}
                  name="clock"
                  size={15}
                
                />
                <Text
                  style={{ marginLeft: 5, fontWeight: "bold", color: "#FFF" }}
                >
                  12:00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ marginLeft: 10, fontWeight: "bold", color: "#FFF" }}
                >
                  Bus 5 is waiting on Station 2
                </Text>
                <FontAwesome5
                  style={{ marginLeft: 5 }}
                  style={{ opacity: 0.7, marginLeft: 10, color: "#fff"}}
                  name="clock"
                  size={15}
                  
                />
                <Text
                  style={{ marginLeft: 5, fontWeight: "bold", color: "#FFF" }}
                >
                  2:30
                </Text>
              </View>
            </View>
          </View>
        </CustomCard>

        <View style={{ position: "absolute", bottom: 2, width: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 45,
              marginBottom: -10,
              backgroundColor: "#fff",
            }}
          >
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 15,
                  backgroundColor: "#fff",
                  width: 300,
                  height: 50,
                }}
              >
                <Ionicons
                  name="home"
                  size={25}
                  color="#BDBEC1"
                  onPress={() => navigation.navigate("HomePage")}
                />

                <Entypo
                  name="ticket"
                  size={25}
                  color="#BDBEC1"
                  onPress={() => navigation.navigate("Ticket")}
                />

                <MaterialCommunityIcons
                  name="bell"
                  size={25}
                  color="#445191"
                  onPress={() => navigation.navigate("Notifications")}
                />

                <Feather
                  name="more-horizontal"
                  size={25}
                  color="#BDBEC1"
                  onPress={() => navigation.navigate("More")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return <Ticket />;
}

const styles = StyleSheet.create({
  topview: {
    marginTop: 60,
    marginHorizontal: 24,
    backgroundColor: "#445191",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomemessage: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },
  searchbar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: 40,
    borderRadius: 10,
    marginBottom: 65,
  },
  circle: {
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: "#fff",
  },
  welcomecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomview: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#445191",
  },
  image: {
    marginTop: 5,
    marginBottom: -30,
    width: 200,
    height: 200,
    borderRadius: 60,
  },
});
