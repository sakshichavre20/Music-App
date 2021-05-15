import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Notification = (props) => {
    return (
        <View style={styles.conatiner}>
            <Text style={{color:'white'}}>Notification</Text>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
