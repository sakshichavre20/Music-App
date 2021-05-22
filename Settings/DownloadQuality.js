import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DownloadQuality = () => {
    return (
      <View style={styles.container}>
        <Text>DownloadQuality</Text>
      </View>
    );
}

export default DownloadQuality

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
    }
})
