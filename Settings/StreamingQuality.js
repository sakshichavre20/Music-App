import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StreamingQuality = () => {
    return (
        <View style={styles.container}>
            <Text>StreamingQuality</Text>
        </View>
    )
}

export default StreamingQuality

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'black',
    }
})
