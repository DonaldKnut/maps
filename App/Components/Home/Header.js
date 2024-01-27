import { View, Text, Image, TextInput, Dimensions } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: 8,
      }}
    >
      {/* <FontAwesome6 name="map-location-dot" size={24} color="black" /> */}
      <Image
        source={require("../../../assets/location_image.png")}
        style={styles.logo}
      />
      <View>
        <TextInput placeholder="Search" style={styles.searchBar} />
      </View>
      <Image
        source={require("../../../assets/user.png")}
        style={styles.userImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    // width: 58,
    // height: 80,
    width: 30,
    height: 40,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    marginTop: 9,
    width: Dimensions.get("screen").width * 0.7,
  },
  userImage: {
    width: 44,
    height: 44,
    borderRadius: 100,
  },
});
