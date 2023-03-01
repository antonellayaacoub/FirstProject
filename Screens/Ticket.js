import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Sign = ({ navigation }) => {
  const [BusOpen, setBusOpen] = useState(false);
  const [BusValue, setBusValue] = useState(null);
  const [Bus, setBus] = useState([
    { label: "Bus 1 ", value: "bus1" },
    { label: "Bus 2", value: "bus2" },
    { label: "Bus 3", value: "bus3" },
  ]);
  const [StationOpen, setStationOpen] = useState(false);
  const [StationValue, setStationValue] = useState(null);
  const [Station, setStation] = useState([
    { label: "Station 1", value: "station1" },
    { label: "Station 2", value: "station2" },
    { label: "Station 3", value: "station3" },
  ]);
  const [TimeOpen, setTimeOpen] = useState(false);
  const [TimeValue, setTimeValue] = useState(null);
  const [Time, setTime] = useState([
    { label: "10:00 AM ", value: "10" },
    { label: "11:00 AM", value: "11" },
    { label: "2:00 PM ", value: "2" },
  ]);
  const [FromOpen, setFromOpen] = useState(false);
  const [FromValue, setFromValue] = useState(null);
  const [From, setFrom] = useState([
    { label: "Rayak ", value: "r" },
    { label: "Zahle", value: "z" },
    { label: "Ablah ", value: "a" },
  ]);
  const [loading, setLoading] = useState(false);
  const onBusOpen = useCallback(() => {
    setTimeOpen(false);
  }, []);
  const onStationOpen = useCallback(() => {
    setTimeOpen(false);
  }, []);

  const onTimeOpen = useCallback(() => {
    setStationOpen(false);
  }, []);
  const onFromOpen = useCallback(() => {
    setTimeOpen(false);
  }, []);
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/icon.png")} />

      <Text style={styles.label}>Bus</Text>
      <Controller
        name="Bus"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownBus}>
            <DropDownPicker
              style={styles.dropdown}
              open={BusOpen}
              value={BusValue}
              items={Bus}
              setOpen={setBusOpen}
              setValue={setBusValue}
              setItems={setBus}
              placeholder="Select Bus"
              placeholderStyle={styles.placeholderStyles}
              onOpen={onBusOpen}
              onChangeValue={onChange}
              zIndex={5000}
              zIndexInverse={3000}
            />
          </View>
        )}
      />
      <View>
        <Text style={styles.label}>Time</Text>
        <Controller
          name="Time"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={styles.dropdownBus}>
              <DropDownPicker
                style={styles.dropdown}
                open={TimeOpen}
                value={TimeValue}
                items={Time}
                setOpen={setTimeOpen}
                setValue={setTimeValue}
                setItems={setTime}
                placeholder="Select time"
                placeholderStyle={styles.placeholderStyles}
                onOpen={onTimeOpen}
                onChangeValue={onChange}
                zIndex={4000}
                zIndexInverse={1000}
              />
            </View>
          )}
        />
        <Text style={styles.label}>Station</Text>
        <Controller
          name="Station"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={styles.dropdownStation}>
              <DropDownPicker
                style={styles.dropdown}
                open={StationOpen}
                value={StationValue} //companyValue
                items={Station}
                setOpen={setStationOpen}
                setValue={setStationValue}
                setItems={setStation}
                placeholder="Select Station"
                placeholderStyle={styles.placeholderStyles}
                loading={loading}
                activityIndicatorColor="#445191"
                searchable={true}
                searchPlaceholder="Search your station here..."
                onOpen={onStationOpen}
                onChangeValue={onChange}
                zIndex={3000}
                zIndexInverse={1000}
              />
            </View>
          )}
        />
        <Text style={styles.label}>From</Text>
        <Controller
          name="From"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={styles.dropdownStation}>
              <DropDownPicker
                style={styles.dropdown}
                open={FromOpen}
                value={FromValue} //companyValue
                items={From}
                setOpen={setFromOpen}
                setValue={setFromValue}
                setItems={setFrom}
                placeholder="From"
                placeholderStyle={styles.placeholderStyles}
                loading={loading}
                activityIndicatorColor="#445191"
                searchable={true}
                searchPlaceholder="Search your location here..."
                onOpen={onFromOpen}
                onChangeValue={onChange}
                zIndex={1000}
                zIndexInverse={4000}
              />
            </View>
          )}
        />
      </View>

      <Pressable
        style={styles.getStarted}
        title="Done"
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={styles.Text}> Buy </Text>
      </Pressable>

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
                color="#445191"
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  image: {
    marginTop: 5,

    marginLeft: 120,
    width: 150,
    height: 150,
    borderRadius: 60,
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
  placeholderStyles: {
    color: "grey",
  },
  dropdownBus: {
    marginHorizontal: 10,
    width: "40%",
    marginBottom: 15,
  },
  dropdownStation: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
  getStarted: {
    backgroundColor: "#445191",
    color: "white",
    textAlign: "center",
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 50,
  },
  logIn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
    color: "#fff",
  },
  links: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#758580",
  },
  Text: {
    fontSize: 16,
    lineHeight: 21,
    marginLeft: 110,
    letterSpacing: 0.25,
    color: "#fff",
  },
});

export default Sign;
