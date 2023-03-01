import * as React from "react";
import { Text, View ,StyleSheet , TextInput} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const FromTo = (props) => {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{ flexDirection: "row", marginBottom: 15, alignItems: "center" }}
      >
        <Ionicons
          name="location-sharp"
          size={26}
          color={props.backgroundColor}
        />
        <View style={{ marginLeft: 20 }}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="From"
              placeholderTextColor="#445191"
              onChangeText={(SU) => setSU(SU)}
            />
          </View>
          <Text
            style={{ fontWeight: "bold", fontSize: 15, marginTop: 10 }}
          ></Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          left: 12,
          height: 28,
          borderWidth: 1,
          top: 42,
          width: 0,
          borderColor: "#EBE7E6",
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderTopStartRadius: 60,
          borderTopEndRadius: 20,
          borderColor: "#EBE7E6",
          borderTopWidth: 2,
        }}
      >
        <Ionicons name="location-sharp" size={26} color="#5C7A82" />
        <View style={{ marginLeft: 20 }}>
     
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="To"
              placeholderTextColor="#445191"
              onChangeText={(SU) => setSU(SU)}
            />
          </View>
          <Text
            style={{ fontWeight: "bold", fontSize: 15, marginTop: 10 }}
          ></Text>
        </View>
         
        </View>
      </View>
    
  );
};
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
    borderRadius: 20,
    width:"200%",
    height: 50,
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
