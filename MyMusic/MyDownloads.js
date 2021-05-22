import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyDownloads = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{color:'white'}}>My Downloads</Text>
        </View>
    )
}

export default MyDownloads

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
    }    
})
