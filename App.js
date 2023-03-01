import React from "react";
import axios from "axios";

import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import SetPass from "./Screens/SetPass";
import HomePage from "./Screens/HomePage";
import Notifications from "./Screens/Notifications";
import Ticket from "./Screens/Ticket";
import More from "./Screens/More";
import Drivers from "./Screens/Drivers";
import Ready from "./Screens/Ready";
import Admin from "./Screens/Admin";
import Users from "./Screens/Users";
import Reservations from "./Screens/Reservations";
import AddaDriver from "./Screens/AddaDriver";
import AddaStation from "./Screens/AddaStation";
import Comments from "./Screens/Comments";
import Emergency from "./Screens/Emergency";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SetPass" component={SetPass} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Ticket" component={Ticket} />
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="Drivers" component={Drivers} />
      <Stack.Screen name="Reservations" component={Reservations} />
      <Stack.Screen name="Ready" component={Ready} />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="AddaDriver" component={AddaDriver} />
      <Stack.Screen name="AddaStation" component={AddaStation} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="Emergency" component={Emergency} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
