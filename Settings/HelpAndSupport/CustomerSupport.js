import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CustomerSupport = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{color:'white'}}>CustomerSupport</Text>
        </View>
    )
}

export default CustomerSupport

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'

    }
})
