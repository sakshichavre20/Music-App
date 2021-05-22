import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Update = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{color:'white'}}>Update</Text>
        </View>
    )
}

export default Update

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    }
})
