import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyFav = (props) => {
    return (
        <View style={styles.conatiner}>
            <Text>My Fav</Text>
        </View>
    )
}

export default MyFav

const styles = StyleSheet.create({
    conatiner:{
        flex:1
    }
})
