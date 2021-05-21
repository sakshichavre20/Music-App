import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image,TextInput, ImageBackground } from 'react-native';
import Home from '../Screen/Home';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from "expo-status-bar";
const Login = (props) =>{
    return (
      <View style={styles.container}>
        <StatusBar style='light'/>
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
            />
            <TextInput
              style={styles.input2}
              placeholder="Password"
              placeholderTextColor="#FF2871"
            />
          </View>
          <LinearGradient
            style={styles.login}
            colors={["#FF3C7E", "#FC2C72", "#ff005c", "#FB0029"]}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.replace("HomeScreen");
              }}> 
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                  width: 150,
                }}
              >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
                LOGIN
              </Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.signup}>
            <Text style={{ fontSize: 20, color: "white" }}>
              Dont have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Signup");
              }}
            >
              
                <Text
                  style={{ fontSize: 23, fontWeight: "bold", color: "#FF2871" }}>
                 {' '} SignUp
                </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  input1: {
    width: 330,
    height: 45,
    marginTop: 350,
    fontSize: 20,
    backgroundColor: "white",
    paddingLeft: 10,
    borderRadius: 20,
  },
  input2: {
    width: 330,
    height: 45,
    marginTop: 5,
    fontSize: 20,
    backgroundColor: "white",
    paddingLeft: 10,
    borderRadius: 20,
  },
  login: {
    height: 50,
    width: 150,
    backgroundColor: "#FF2871",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 170,
    borderRadius: 20,
  },
  signup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom:100
  },
});

export default Login;
 