import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from "react-native";
import {
  Entypo,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Account = (props) => {
  return (
    <View style={styles.container}>
      {/*-------------------------------- HEADER SECTION STARTS -----------------------------------*/}
      <View style={styles.header}>
        <View style={{ width: "10%", paddingLeft: 5 }}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Entypo name="menu" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 23, fontWeight: "bold" }}>
            Account
          </Text>
        </View>
        <View
          style={{
            width: "10%",
          }}
        ></View>
      </View>
      {/* --------------------------------------MAIN CONTAINER------------------------------------- */}
      {/* -------------------------------------- PROFILE PHOTO------------------------------------- */}
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLkkV462n0oIUwMR99gPmRAa8iKA1Q4AP2g&usqp=CAU",
        }}
        style={{ width: 200, height: 200, marginTop: 20, marginBottom: 20 }}
        imageStyle={{ borderRadius: 300 }}
      >
        <FontAwesome
          name="camera"
          size={40}
          color="darkgrey"
          style={{
            position: "absolute",
            top: 155,
            left: 155,
          }}
        />
      </ImageBackground>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* -------------------------------------REAL NAME SECTION --------------------------------------*/}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={styles.label}>Display Name</Text>

            <TextInput
              placeholder="Sakshi Chavre"
              placeholderTextColor="#FF2871"
              style={styles.userinput}
            />
          </View>
          <View style={styles.icon}>
            <MaterialIcons name="edit" color="grey" size={30} />
          </View>
        </View>
        {/* ----------------------------- USER INFORMATION ------------------------------------------*/}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={styles.label}>Username</Text>

            <TextInput
              placeholder="Sakshi_Chavre"
              placeholderTextColor="#FF2871"
              style={styles.userinput}
            />
          </View>
          <View style={styles.icon}>
            <MaterialIcons name="edit" color="grey" size={30} />
          </View>
        </View>
        {/* -----------------------------------------USER EMAIL------------------------------------- */}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={styles.label}>Email</Text>

            <TextInput
              placeholder="Sakshi@gmail.com"
              placeholderTextColor="#FF2871"
              style={styles.userinput}
            />
          </View>
          <View style={styles.icon}>
            <MaterialIcons name="edit" color="grey" size={30} />
          </View>
        </View>
        {/* ---------------------------------------CONTACACT NUMBER ----------------------------------*/}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={styles.label}>Contact Number</Text>

            <TextInput
              placeholder="9175954524"
              placeholderTextColor="#FF2871"
              style={styles.userinput}
            />
          </View>
          <View style={styles.icon}>
            <MaterialIcons name="edit" color="grey" size={30} />
          </View>
        </View>
        {/* --------------------------------- SIGNOUT SECTION ------------------------------------------- */}
        <LinearGradient
          style={styles.Signout}
          colors={["#FF3C7E", "#FC2C72", "#ff005c", "#FB0029"]}
        >
          <TouchableOpacity
            onPress={() => {
              props.navigation.replace("Login");
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                width: 150,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "black" }}
              >
                SIGNOUT
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: 30,
  },
  header: {
    backgroundColor: "#FF2871",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userinput: {
    width: "100%",
    height: 40,
    paddingLeft: 15,
  },
  userinfo: {
    width: "100%",
    height: 70,
    padding: 5,
    flexDirection: "row",
  },
  Signout: {
    height: 50,
    width: 150,
    backgroundColor: "#FF2871",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 40,
  },
  label: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    width: "10%",
    justifyContent: "flex-end",
    paddingBottom: 5,
  },
});
