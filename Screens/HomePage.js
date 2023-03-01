import { StatusBar } from "expo-status-bar";

import MapView from "react-native-maps";

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
  ScrollView,
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function HomePage({ navigation, HomePage }) {
  const DATA = [
    {
      id: 1,
      name: "Bus",

      height: 5,

      onPressHandler: () => {
        nav.navigate("schedule", {
          title: "icon",

          backgroundColor: "#FFF",
        });
      },
    },
  ];
  const transportItem = ({ item }) => {
    return (
      <CustomCard>
        <View
          style={{
            flexDirection: "row",
            overflow: "hidden",
            justifyContent: "space-between",
            padding: 15,
            backgroundColor: item.backgroundColor,
            marginHorizontal: 26,
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <View>
            <Image
              style={{ position: "absolute", right: -15, bottom: 2 }}
              source={item.imagesrc}
            ></Image>
          </View>
        </View>
      </CustomCard>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <View style={styles.welcomecontainer}></View>

        <View style={styles.searchbar}>
          <TextInput
            placeholder="Search"
            style={{
              marginLeft: 15,
              opacity: 6,
              fontSize: 20,
              color:"#ffffff"
            }}
          ></TextInput>
        </View>
      </View>
      <View style={styles.bottomview}>
        <View>
          <FlatList
            data={DATA}
            renderItem={transportItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.containermap}>
          <MapView style={styles.map} />
        </View>
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
                <Ionicons name="home" size={25} color="#445191" />

                <Entypo
                  name="ticket"
                  size={25}
                  color="#BDBEC1"
                  onPress={() => navigation.navigate("Ticket")}
                />

                <MaterialCommunityIcons
                  name="bell"
                  size={25}
                  color="#BDBEC1"
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

  return <HomePage />;
}

const styles = StyleSheet.create({
  topview: {
    marginTop: 60,
    marginHorizontal: 24,
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "space-between",
  },
  welcomemessage: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },
  searchbar: {
    flexDirection: "row",
    backgroundColor: "#445191",
    alignItems: "center",
    width: "100%",
    height: 40,
    borderRadius: 10,
    marginBottom: 500,
    marginTop:-35,
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
    backgroundColor: "#FFFFFF",
  },
  containermap: {
    flex: 1,
    marginBottom: 70,
    marginTop: -220,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
