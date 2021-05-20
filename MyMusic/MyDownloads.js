import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyDownloads = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{color:'black'}}>My Downloads</Text>
        </View>
    )
}

export default MyDownloads

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
    }
})
