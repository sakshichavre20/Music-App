import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import {
  Entypo,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { auth, db } from "../Config";
import * as ImagePicker from "expo-image-picker";

const Account = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [userData, setUserData] = useState([]);
  const getUser = async () => {
    await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
          //console.log(doc.data());
        }
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  const update = async () => {
    await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .update({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        // userImg: userData.imgUrl,
      })
      .then(() => {
        console.log("User Updated!");
        Alert.alert(
          "Profile Updated!",
          "Your profile has been updated successfully."
        );
      });

    props.navigation.navigate("Home");
  };

  const signOutUser = () => {
    auth.signOut().then(() => {
      props.navigation.replace("Login");
    });
  };
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
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
      <View
        style={{
          width: 205,
          height: 205,
          marginTop: 20,
          marginBottom: 20,
          borderRadius: 300,
          backgroundColor: "#FF2871",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 200,
              height: 200,
              marginTop: 20,
              marginBottom: 20,
              borderRadius: 300,
            }}
          />
        )}
        <FontAwesome
          name="camera"
          size={40}
          color="darkgrey"
          style={{
            position: "absolute",
            top: 155,
            left: 155,
          }}
          onPress={pickImage}
        />
      </View>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* -------------------------------------REAL NAME SECTION --------------------------------------*/}
        <View style={styles.userinfo}>
          <View style={{ width: "90%" }}>
            <Text style={styles.label}>Display Name</Text>

            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#FF2871"
              style={styles.userinput}
              value={userData ? userData.name || "" : ""}
              onChangeText={(txt) => setUserData({ ...userData, name: txt })}
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
              placeholder="Enter your email"
              placeholderTextColor="#FF2871"
              style={styles.userinput}
              value={userData ? userData.email || "" : ""}
              onChangeText={(txt) => setUserData({ ...userData, email: txt })}
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
              placeholder="Enter your contact no."
              placeholderTextColor="#FF2871"
              style={styles.userinput}
              value={userData ? userData.phone || "" : ""}
              onChangeText={(txt) => setUserData({ ...userData, phone: txt })}
            />
          </View>
          <View style={styles.icon}>
            <MaterialIcons name="edit" color="grey" size={30} />
          </View>
        </View>
        {/* --------------------------------- update SECTION ------------------------------------------- */}
        <LinearGradient
          style={styles.Signout}
          colors={["#FF3C7E", "#FC2C72", "#ff005c", "#FB0029"]}
        >
          <TouchableOpacity onPress={update}>
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
                UPDATE
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
        {/* --------------------------------- SIGNOUT SECTION ------------------------------------------- */}
        <LinearGradient
          style={styles.Signout}
          colors={["#FF3C7E", "#FC2C72", "#ff005c", "#FB0029"]}
        >
          <TouchableOpacity onPress={signOutUser}>
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
    paddingTop: 40,
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
    color: "#FF2871",
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
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    width: "10%",
    justifyContent: "flex-end",
    paddingBottom: 5,
  },
});
