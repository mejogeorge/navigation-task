import React,{Component} from "react"
import {Text,View,StyleSheet} from "react-native"
let timer = null;

export default class Clock extends Component {
constructor(props) {
    super(props)
    this.state = {
        time:new Date().toLocaleTimeString()
    }
}
static navigationOptions = ({navigation})=>{
    return{
    title:navigation.getParam('name','samayam')
    }
}


componentDidMount () {
    timer = setInterval(()=>this.tick(),1000) 
}
componentWillUnmount(){
    clearInterval(timer)
}

tick(){
this.setState({
    time : new Date().toLocaleTimeString()  
})
}
    render(){
        return(
            <View style={style.container}>
                <Text>{this.state.time}</Text>
            </View>
        );
    }
}


const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent :'center'
    }
})