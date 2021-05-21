import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PodCast = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#FF2871" }}>Podcast</Text>
      </View>
    );
}

export default PodCast

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30
    }
})
