import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyLibraray = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{color:'white'}}>MyLibrary</Text>
        </View>
    )
}

export default MyLibraray

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
    }
})
