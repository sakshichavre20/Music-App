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
        {/* --------------------------------- LANGUAGES ------------------------------------------- */}
        <View style={styles.lang}>
          <Text style={styles.langText}> ENGLISH</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> BENGALI</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> RUSSIAN</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> HINDI</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> Arabic</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> URDU</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> MARATHI</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> KANNADA</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> TAMIL</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> TELGU</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> GERMAN</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> FRENCH</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> CHINESE</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> JAPANESE</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> PORTUGUESE</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> PANJABI</Text>
        </View>
        <View style={styles.lang}>
          <Text style={styles.langText}> MARWADI</Text>
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
    paddingTop: 40,
  },
  header: {
    backgroundColor: "#FF2871",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    width: "100%",
    marginBottom: 10,
  },
  lang: {
    width: "100%",
    height: 40,
    backgroundColor: "black",
    justifyContent: "center",
    paddingLeft: 10,
    borderBottomColor: "#2d2d2d",
    borderBottomWidth: 0.5,
  },
  langText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
