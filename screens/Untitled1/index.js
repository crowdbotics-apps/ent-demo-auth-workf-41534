import React from "react";
import { useEffect } from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";

const Splash = ({
  navigation
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("ScreenAI6");
    }, 2000);
  }, []);
  return <View style={styles.container}>
      <ImageBackground style={styles.BAuRCnCj} source={require("./assets/Wheel_Loader_WA500.png")} resizeMode="cover"></ImageBackground>
      <ImageBackground style={styles.eziaingY} source={require("./assets/komatsu-logo.png")} resizeMode="cover"></ImageBackground>
      <ImageBackground style={styles.BAuRCnCjw} source={require("./assets/bg.png")} resizeMode="cover"></ImageBackground>
      <Image source={require("./Wheel_Loader_WA500.png")} style={styles.logo} />
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
  }
});
export default Splash;