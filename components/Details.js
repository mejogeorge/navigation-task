import React,{Component} from "react"
import {Text,Button,StyleSheet,View} from "react-native"

 export default class DetailsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
      };


    render() {
        const propObject = this.props.navigation.state.params
        // const name = this.props.navigation.getParam('itemId', 'NO-ID');
                // otherParam:'anything you want here',
                // console.warn('name:',propObject.itemId,propObject.otherParam)
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen:{propObject.itemId}</Text>
          <Button
          title ='Back'
          onPress={()=> this.props.navigation.navigate('Home')}
          />
          <Button
          title ='again details'
          onPress={()=> this.props.navigation.push('Details',{
              itemId:16,
              otherParam:'secondtime'
          })}
          />
          <Button
          title ='go Back'
          onPress={()=> this.props.navigation.goBack()}
          />
          <Button
          title ='pop'
          onPress={()=> this.props.navigation.pop()}
          />
          <Button
          title ='pop to top'
          onPress={()=> this.props.navigation.popToTop('Home')}
          />
          <Button
          title='Clock'
          onPress={()=>this.props.navigation.push('clock',{name:'Time'})}
          />
        </View>
      );
    }
  }

  const styles =({
      button:{
        flex:1,
        marginTop:5
      }
  })