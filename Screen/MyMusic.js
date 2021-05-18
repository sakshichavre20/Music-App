import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyMusic = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{color:'#FF2871'}}>My music</Text>
        </View>
    )
}

export default MyMusic

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
    },
    
})
