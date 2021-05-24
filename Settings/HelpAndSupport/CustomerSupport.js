import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome,
} from "react-native-vector-icons";

const CustomerSupport = (props) => {
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
            Customer Support
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* ------------------------- contact us Section -------------------------------------*/}
        <Text style={styles.title}>Contact Us</Text>
        {/* ------------------------- phone number Section -------------------------------------*/}
        <TouchableOpacity onPress={() => {}} style={styles.list}>
          <View style={styles.list}>
            <FontAwesome name="phone" size={26} color="white" />
            <Text style={styles.value}>
              {"  "}:{"  "} 020-101202303{"  "}
            </Text>
          </View>
        </TouchableOpacity>
        {/* ------------------------- email Section -------------------------------------*/}
        <TouchableOpacity onPress={() => {}} style={styles.list}>
          <View style={styles.list}>
            <MaterialIcons name="email" size={25} color="white" />
            <Text style={styles.value}>
              {"  "}:{"  "} abc@gmail.com{"  "}
            </Text>
          </View>
        </TouchableOpacity>
        {/* ------------------------- FAQ header -------------------------------------*/}
        <Text style={styles.title}>FAQ</Text>
        {/* ------------------------- FAQ Section -------------------------------------*/}

        {/* ------------------------- Couldnot download song -------------------------------------*/}

        <View style={{ width: "100%" }}>
          <TouchableOpacity style={styles.faq_que}>
            <View>
              <Text style={{ color: "white" }}>Couldn't Download Songs ?</Text>
            </View>
          </TouchableOpacity>
          {/* ------------------------- equalizer not working -------------------------------------*/}
          <TouchableOpacity style={styles.faq_que}>
            <View>
              <Text style={{ color: "white" }}>Equalizer not Working ? </Text>
            </View>
          </TouchableOpacity>

          {/* -------------------------  streaming isuue -------------------------------------*/}
          <TouchableOpacity style={styles.faq_que}>
            <View>
              <Text style={{ color: "white" }}>Streaming issues ? </Text>
            </View>
          </TouchableOpacity>
          {/* ------------------------- Missing Songs -------------------------------------*/}
          <TouchableOpacity style={styles.faq_que}>
            <View>
              <Text style={{ color: "white" }}>Missing Songs ? </Text>
            </View>
          </TouchableOpacity>
          {/* ------------------------- Podcast Issue -------------------------------------*/}
          <TouchableOpacity style={styles.faq_que}>
            <View>
              <Text style={{ color: "white" }}>Podcast issue ? </Text>
            </View>
          </TouchableOpacity>
          {/* ------------------------- equalizer not working -------------------------------------*/}
          <TouchableOpacity style={styles.faq_que}>
            <View>
              <Text style={{ color: "white" }}>Player Not Working ? </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Enter your query"
          placeholderTextColor="#FF2871"
          style={styles.queryinput}
        />

        {/* ------------------------- button -------------------------------------*/}
        <View style={styles.submit}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "800", color: "white" }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomerSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: 40,
    padding: 2,
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
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: 5,
    marginTop: 10,
  },
  value: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  faq_que: {
    borderWidth: 1,
    borderColor: "#FF2871",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 40,
  },
  queryinput: {
    width: "70%",
    maxWidth: 700,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2d2d2d",
    paddingLeft: 10,
    fontSize: 15,
    marginTop: 10,
  },
  submit: {
    width: 150,
    height: 50,
    backgroundColor: "#FF2871",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 20,
  },
});
