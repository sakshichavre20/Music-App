import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons, MaterialIcons } from "react-native-vector-icons"; 

const MusicList = () => {
    return (
      <View style={styles.container}>
        <Ionicons name="musical-notes-sharp" size={28} color="#FF2871" />
        <View style={{ width: "77%" ,paddingLeft:10}}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#929695" }}>
            Music
          </Text>
          <Text style={{ fontSize: 20, color: "#929695" }}>Description</Text>
        </View>

        <View
          style={{
            width: "20%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}>
        
          <View>
            <Ionicons name="ios-heart-sharp" size={24} color="#FF2871" />
          </View>
          <View style={{marginLeft:15}}>
            <MaterialIcons name="delete" size={28} color="#FF2871" />
          </View>
        </View>
      </View>
    );
}

export default MusicList

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "#2D2D2D",
    borderBottomWidth: 0.3,
    paddingHorizontal:20,
    flexDirection:'row',
    alignItems:'center'
  },
 
});
