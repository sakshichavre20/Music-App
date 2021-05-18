import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
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
} from "react-native-vector-icons";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userinfo}>
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
                  <Title style={{ color: "grey" }}>Sakshi Chavre</Title>
                  <Caption style={{ fontSize: 15, color: "#FF2871" }}>
                    @Sakshi_Chavre
                  </Caption>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <Drawer.Section style={styles.section}>
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="musical-notes" color="grey" size={size} />
              )}
              label={() => <Text style={{ color: "#FF2871" }}>Music</Text>}
              activeBackgroundColor="red"
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color="grey" size={25} />
              )}
              label={() => <Text style={{ color: "#FF2871" }}>Settings</Text>}
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Setting");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    padding: 10,
  },
  userinfo: {
    flexDirection: "row",
  },
  section: {
    paddingTop: 220,
  },
  bottomDrawer: {
    marginBottom: 15,
  },
});