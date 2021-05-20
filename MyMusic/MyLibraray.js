import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyLibraray = (props) => {
    return (
        <View style={styles.container}>
            <Text>MyLibrary</Text>
        </View>
    )
}

export default MyLibraray

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
    }
})
