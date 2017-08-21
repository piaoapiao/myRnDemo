import React from 'react';
import { StyleSheet, Text, View,Button,Alert,TouchableHighlight,TextInput } from 'react-native';

export default class App extends React.Component {

// http://www.cnblogs.com/bennman/p/5301320.html
  constructor(props)
  {
    
    super(props);
    console.log("constructor")

    this.state = {
      isLogined:false,
      userName:"gogo",
    }
  }
  


    componentDidMount() {
      console.log("componentDidMount")
        this.setState({ data: 'Hello' });
        this.setState({ userName: 'Hello' });
    }

 click() {
   //Alert.alert('You tapped the button!' )
   var name = this.state.userName;
    // Alert.alert('You tapped the button!' + this.state.userName)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ backgroundColor:"red"}}>>123</Text>

        <Text > Open up App.123js to start working on your app!</Text>
        <View  style ={{ flexDirection: 'row-reverse',justifyContent:"flex-start"}} >
          <Text   style={{ marginTop:20, marginLeft:10, 
            backgroundColor:"red",fontWeight:"bold",width:200,fontSize:20,textAlign:'right' }} >
            Changes you45
          </Text>
          <Text style = {{flex :2,backgroundColor:"green"}} > "test"</Text>  
        </View>   

        <Button
            title = "登录10"
            color = "red"                        
            style={{backgroundColor: "#ffde00",}} 
            textStyle={{fontSize: 18}}           
            onPress = {this.click}
        />        
        
         <Button
            title = "登录11"
            color = "red"                        
            style={{backgroundColor: "#ffde00",}} 
            textStyle={{fontSize: 18}}           
            onPress = {this.click}
        /> 


        <TextInput
          style={{ backgroundColor:"red"}}
          placeholder={"test"}
          maxLength = {5}
        />

        <Button
          title = "登录2"
          style={{backgroundColor:"#FF0000"}}
          raised={true} 
          theme = 'dark'
          overrides={{backgroundColor: 'red'}}
          onPress = {this.click}
        />

      </View> 


      
    );
  }
}

const styles = StyleSheet.create({
    container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
  },
});





