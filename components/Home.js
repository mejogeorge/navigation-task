import React,{Component} from "react";
import {Text,Button,StyleSheet,View} from "react-native";
// import DetailsScreen from './Details'


export default class Home extends Component{
    static navigationOptions = {
        title: 'Home',
      };
    render(){
        return(
            <View style={styles.container}>
            <Button
            title='details'
            onPress={()=>this.props.navigation.navigate('Details', {
                itemId:86,
                otherParam:'anything you want here',
              })}
            />
            <Text style={styles.welcome}>Welcome:</Text>
            </View>
        );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    button:{
        flex:1,
        padding:5,
        marginBottom:10
    }
  });