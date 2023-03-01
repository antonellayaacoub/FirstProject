import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useForm, Controller } from "react-hook-form";

const Sign = () => {
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
  const [loading, setLoading] = useState(false);
  const onBusOpen = useCallback(() => {
    setStationOpen(false);
  }, []);

  const onStationOpen = useCallback(() => {
    setBusOpen(false);
  }, []);
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/icon.png")} />

      <View>
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
                zIndex={3000}
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
                zIndex={1000}
                zIndexInverse={3000}
              />
            </View>
          )}
        />
      </View>

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text style={styles.getStarted}>Ready</Text>
      </TouchableOpacity>
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
    width: "50%",
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
    marginTop: 20,
  },
  logIn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  links: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#758580",
  },
});

export default Sign;
