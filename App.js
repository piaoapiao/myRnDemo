import React from 'react';
import { StyleSheet, Text, View,Button,Alert,TouchableHighlight,TextInput ,NavigatorIOS} from 'react-native';

import FirstCtrl from './LoginController'

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
   console.log("click14");
   console.log("click111");
   Alert.alert('You tapped the button!' )

  //  var name = this.state.userName;
    // Alert.alert('You tapped the button!' + this.state.userName)
  }

  render() {
    return (
     < NavigatorIOS
        initialRoute={{
          component: FirstCtrl,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
    )
  }




  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={{ backgroundColor:"red"}}>1234354354</Text>

  //       <Text > Open up App.123js to start working on your app!</Text>
  //       <View  style ={{ flexDirection: 'row-reverse',justifyContent:"flex-start"}} >
  //         <Text   style={{ marginTop:20, marginLeft:10, 
  //           backgroundColor:"red",fontWeight:"bold",width:200,fontSize:20,textAlign:'right' }} >
  //           Changes you45
  //         </Text>
  //         <Text style = {{flex :2,backgroundColor:"green"}} > "test"</Text>  
  //       </View>   

  //       <Button
  //           title = "登录1012234"
  //           color = "red"                        
  //           style={{backgroundColor: "#ffde00",}} 
  //           textStyle={{fontSize: 18}}           
  //           onPress = {this.click}
  //       />        
        
  //        <Button
  //           title = "登录1201"
  //           color = "red"                        
  //           style={{backgroundColor: "#ffde00",}} 
  //           textStyle={{fontSize: 18}}           
  //           onPress = {this.click}
  //       /> 


  //       <TextInput
  //         style={{ backgroundColor:"red"}}
  //         placeholder={"test"}
  //         maxLength = {5}
  //       />

  //       <Button
  //         title = "登录2"
  //         style={{backgroundColor:"#FF0000"}}
  //         raised={true} 
  //         theme = 'dark'
  //         overrides={{backgroundColor: 'red'}}
  //         onPress = {this.click}
  //       />

  //       <View  style={{backgroundColor: "green", alignSelf:"flex-end" ,marginRight:10 }}>
  //             <Button
  //                 title = "登1123123"
  //                 color = "red"
  //                 style={{backgroundColor: "#ffde00",fontSize:50}}
  //                 onPress = {this.click}
  //             />
  //       </View>


  //       <View   style={{flexDirection : "row",backgroundColor: "black" ,width:50,marginTop:60,marginLeft:0 , marginRight:30 }}>
  //             <Button
  //                 title = "登1123123435"
  //                 color = "red"
  //                 style={{backgroundColor: "#ffde00",fontSize:50}}
  //                 onPress = {this.click}
  //             />

  //             <Button
  //                 title = "登1123123435"
  //                 color = "red"
  //                 style={{backgroundColor: "#ffde00",fontSize:50,marginTop:0}}
  //                 onPress = {this.click}
  //             />
  //       </View>

  //       <View>

  //       </View>  

  //     </View> 
  //   );
  // }
}

const styles = StyleSheet.create({
    container : {
    flex: 1,
    backgroundColor: '#fff',
  },
});





