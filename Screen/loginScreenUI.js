import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Main from "../Navigator/NavigatorElement";


export default function LoginScreenUI() {

  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Your App Logo</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate(Main)}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#333",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});
