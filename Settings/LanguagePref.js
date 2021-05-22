import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "react-native-vector-icons";

const LanguagePref = (props) => {
  return (
    <View style={styles.container}>
      {/* ------------------------- Header Section -------------------------------------*/}
      <View style={styles.header}>
        <View style={{ width: "10%" }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Setting")}
          >
            <Ionicons name="arrow-back-sharp" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Set Language
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      {/* ------------------------- Main Container -------------------------------------*/}
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default LanguagePref;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    marginTop: 40,
  },
  header: {
    backgroundColor: "#FF2871",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
  },
  lang: {
    width: "100%",
    height: 40,
    backgroundColor: "black",
    justifyContent: "center",
    paddingLeft: 10,
  },
  langText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
