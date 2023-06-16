import React from "react";
import { useEffect } from "react";
import { View, StyleSheet, ImageBackground, Text, Pressable } from "react-native";

const Splash = ({
  navigation
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("ScreenAI6");
    }, 2000);
  }, []);
  return <View style={styles.container}>
      <ImageBackground style={styles.BAuRCnCj} source={require("./Wheel_Loader_WA500.png")} resizeMode="cover"></ImageBackground>
      <ImageBackground style={styles.eziaingY} source={require("./komatsu-logo.png")} resizeMode="cover"></ImageBackground>
      <ImageBackground style={styles.BAuRCnCjw} source={require("./bg.png")} resizeMode="cover"></ImageBackground>
      <Pressable onPress={() => {
      navigation.navigate("Azure Ad Auth");
    }} style={styles.VngTxYqJa}>
        <View style={styles.VngTxYqJ}>
          <Text style={styles.OLGmBJlN}>Get Started</Text>
        </View>
      </Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 300,
    height: 230
  },
  BAuRCnCj: {
    width: 359,
    height: 286,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    top: 175.5
  },
  BAuRCnCjw: {
    width: 999,
    height: 361,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    top: 119,
    zIndex: -1,
    transform: [{
      rotate: "90deg"
    }]
  },
  eziaingY: {
    width: 192,
    height: 37,
    position: "absolute",
    top: 50,
    alignSelf: "center"
  },
  VngTxYqJa: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  VngTxYqJ: {
    height: 48,
    width: 200,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    color: "#777777",
    bottom: 40,
    borderWidth: 2,
    borderColor: "#150A9A",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  OLGmBJlN: {
    lineHeight: 34,
    fontSize: 20,
    fontWeight: "700",
    color: "#150A9A",
    paddingLeft: 10,
    paddingRight: 10
  }
});
export default Splash;