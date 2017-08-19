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
        <Text style={{ backgroundColor:"red"}}> Open up App.123js to start working on your app!</Text>
        <Text>Changes you make1 will automatically reload.</Text>
        <Text>{this.state.userName}</Text>     
        
         <Button
            title = "登录1"
            color = "red"                        
            style={{backgroundColor: "#ffde00",}} 
            textStyle={{fontSize: 18}}           
            onPress = {this.click}
        /> 


        <TextInput
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});





