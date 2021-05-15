import  React  from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Account =(props) =>{
    return(
        <View style={styles.container}>
            <Text style={{color:'white'}}>
             Account
            </Text>
        </View>    
    )
}

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

