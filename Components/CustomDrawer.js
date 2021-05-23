import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBar, Colors } from "react-native-paper";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <DrawerContentScrollView {...props}>
        {/* ---------------------------- Drawer content --------------------------------------- */}
        <View style={styles.drawerContent}>
          {/* ----------------------------- User Info ----------------------------------------- */}
          <View style={styles.userinfo}>
            <LinearGradient
              style={{ padding: 10, flex: 1 }}
              colors={["#FF3C7E", "#FC2C72", "#ff005c", "#FB0029"]}
            >
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Account")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Avatar.Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLkkV462n0oIUwMR99gPmRAa8iKA1Q4AP2g&usqp=CAU",
                    }}
                    size={60}
                  />

                  <View style={{ marginLeft: 10 }}>
                    <Title style={{ color: "white" }}>Sakshi Chavre</Title>
                    <Caption style={{ fontSize: 15, color: "white" }}>
                      @Sakshi_Chavre
                    </Caption>
                  </View>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          {/* -------------------------Drawer Section Starts----------------------- */}
          <Drawer.Section style={styles.section}>
            {/* -------------------------Music SECTION----------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="musical-notes" color="#FF2871" size={size} />
              )}
              label={() => (
                <Text style={{ color: "white", fontSize: 18 }}>Music</Text>
              )}
              activeBackgroundColor="red"
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            {/* ------------------------- Settings SETTINGS ----------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color="#FF2871" size={25} />
              )}
              label={() => (
                <Text style={{ color: "white", fontSize: 18 }}>Settings</Text>
              )}
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Setting");
              }}
            />
            {/* ------------------------- Storage SECTION----------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="storage" color="#FF2871" size={25} />
              )}
              label={() => (
                <Text style={{ color: "white", fontSize: 18 }}>Storage</Text>
              )}
              pressColor="pink"
              style={{}}
              onPress={() => {}}
            />
            <ProgressBar
              progress={0.2}
              color={"#FF2871"}
              style={{ width: "70%", marginLeft: 20 }}
            />
            <View style={{ width: "100%", flexDirection: "row" }}>
              <Text style={{ color: "white", marginLeft: 20, fontSize: 12 }}>
                24.1 GB
              </Text>
              <Text style={{ color: "grey", marginLeft: 80, fontSize: 12 }}>
                101.8 GB free
              </Text>
            </View>
            {/* ------------------------- Clear Cache  SECTION ----------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="broom"
                  color="#FF2871"
                  size={25}
                />
              )}
              label={() => (
                <Text style={{ color: "white", fontSize: 18 }}>
                  Clear Cache
                </Text>
              )}
              pressColor="pink"
              style={{}}
              onPress={() => {
                Alert.alert("Cleared chache");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {},
  userinfo: {
    flexDirection: "row",

    backgroundColor: "#FF2871",
  },
  section: {
    paddingTop: 180,
  },
  clearcache: {
    backgroundColor: "#FF2871",
    height: 40,
    width: 150,
    marginLeft: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
  },
});
