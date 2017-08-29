import React , { Component, PropTypes } from 'react';
import { StyleSheet, Text, View,Button,Alert,TouchableHighlight,TextInput,NavigatorIOS } from 'react-native';

import Detail from './Detail'



export default class LoginController extends React.Component {

  constructor(props)
  {    
    super(props);
    console.log("constructor")

    // this.onPress = this.onPress.bind(this);

    this.state = {
      isLogined:false,
      userName:"gogo",
    }
  }

  click()
  {
  	Alert.alert("click")
  }

  
  click2()
  {
	// Alert.alert("HighLight")

    const nextRoute = {
      component: Detail,
      title: 'Bar That',
      passProps: { myProp: 'bar' }
    };
    console.log(this.props);
     this.props.navigator.push(nextRoute)
	
  }

  //      //	 <TouchableHighlight onPress={this.onPress.bind(this)}>

  //<TouchableHighlight onPress={this.click2.bind(this)}>

  render() {

    return (
      <View style={styles.container}>
      	<Text style={{marginTop:100,marginLeft:40}}>
      	123	
      	</Text>

      	<Button  title = "登录"
			onPress={this.click}
      	/>

      	 
      	 <TouchableHighlight onPress={this.click2.bind(this)}>
      	 
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

      </View>
    )
  }
}


const styles = StyleSheet.create({
    container : {
    flex: 1,
    backgroundColor: '#aaa',

  },
});



