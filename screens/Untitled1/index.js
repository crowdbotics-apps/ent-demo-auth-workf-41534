import React from "react";
import { useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

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
    }],
    left: -320
  },
  eziaingY: {
    width: 192,
    height: 37,
    position: "absolute",
    top: 50,
    alignSelf: "center"
  }
});
export default Splash;