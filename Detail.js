
import React from 'react';
import { StyleSheet, Text, View,Button,Alert,TouchableHighlight,TextInput,NavigatorIOS } from 'react-native';





export default class DetailCtrl extends React.Component {

  constructor(props)
  {    
    super(props);
    console.log("constructor")

    this.state = {
      isLogined:false,
      userName:"gogo",
    }
  }

  click()
  {
  	Alert.alert("click")
  }

  render() {

    return (
      <View style={styles.container}>
      	<Text style={{marginTop:100,marginLeft:40}}>
      	12398903444	
      	</Text>
      	
      	<Button  title = "deta33344il"
			onPress={this.click}
      	/>
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



