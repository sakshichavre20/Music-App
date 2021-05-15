import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Security = (props) => {
    return (
      <View style={styles.conatiner}>
        <Text style={{ color: "white" }}>Security</Text>
      </View>
    );
}

export default Security

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
