import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyFav = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{color:'white'}}>My Fav</Text>
        </View>
    )
}

export default MyFav

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
    }
})
