import React from 'react';
import { StyleSheet, Text, View,Button,Alert,TouchableHighlight,TextInput,NavigatorIOS } from 'react-native';


import PropTypes from 'prop-types';


export default class LoginController extends React.Component {
  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <Button
          title="Tap me to load the next scene"
        />
      </View>
    )
  }
}


// const styles =  StyleSheet.creaet({
// 		inputLable:{
// 			marginLeft:60,
// 		},
// });





// const styles = StyleSheet.create({
//     container : {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });


// export LoginController