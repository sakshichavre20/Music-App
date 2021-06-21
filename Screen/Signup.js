import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";
import { auth, db } from "../Config";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
        db.collection("users").doc(auth.currentUser.uid).set({
          name: username,
          email: email,
          imgUrl: "",
          phone: "",
        });
        props.navigation.navigate("HomeScreen");
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        mode="cover"
        source={require("../assets/bg.jpg")}
        style={styles.background}
      >
        <View>
          <TextInput
            style={styles.input1}
            placeholder="Username"
            placeholderTextColor="#FF2871"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#FF2871"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#FF2871"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#FF2871"
            secureTextEntry={true}
          />
        </View>
        <LinearGradient
          style={styles.signup}
          colors={["#FF3C7E", "#FC2C72", "#ff005c", "#FB0029"]}
        >
          <TouchableOpacity onPress={register}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                width: 150,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "black" }}
              >
                Signup
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  input1: {
    width: 300,
    height: 45,
    marginTop: 250,
    borderRadius: 20,
    fontSize: 16,
    backgroundColor: "white",
    paddingLeft: 10,
  },
  input: {
    width: 300,
    height: 43,
    marginTop: 5,
    borderRadius: 20,
    fontSize: 16,
    backgroundColor: "white",
    paddingLeft: 10,
  },
  signup: {
    backgroundColor: "#FF2871",
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 150,
  },
});

export default Signup;
