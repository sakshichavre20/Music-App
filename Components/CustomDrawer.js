import React from "react";
import { View, StyleSheet } from "react-native";
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userinfo}>
            <View style={{ flexDirection: "row" }}>
              <Avatar.Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLkkV462n0oIUwMR99gPmRAa8iKA1Q4AP2g&usqp=CAU",
                }}
                size={60}
              />
              <View style={{ marginLeft: 10 }}>
                <Title style={{ color: "black" }}>Sakshi Chavre</Title>
                <Caption style={{ fontSize: 15, color: "grey" }}>
                  @Sakshi_Chavre
                </Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.section}>
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="musical-notes" color="grey" size={size} />
              )}
              label="Music"
              activeBackgroundColor="red"
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="notifications" color="grey" size={size} />
              )}
              label="Notifications"
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Notification");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color={color} size={25} />
              )}
              label="Settings"
              pressColor="pink"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Setting");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section styles={styles.bottomDrawer}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="SignOut"
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        />
      </Drawer.Section>
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
