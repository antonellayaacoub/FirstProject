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

import { DataTable } from "react-native-paper";

const Emergency = ({ navigation }) => (
  <DataTable>
    <DataTable.Header>
      <DataTable.Title>Users</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>Carmen Abou Khalil</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Mary Ibrahim</DataTable.Cell>
    </DataTable.Row>
  </DataTable>
);

export default Emergency;
