import  React  from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Setting =(props) =>{
    return(
        <View style={styles.container}>
            <Text style={{color:'white'}}>
                Setting 
            </Text>
        </View>    
    )
}

export default Setting ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});