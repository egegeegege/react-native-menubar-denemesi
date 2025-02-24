import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../Screens/HomeScreen";
import FindScreen from "../Screens/FindScreen";
import ChatScreen from "../Screens/ChatScreen";
import PostScreen from "../Screens/PostScreen";
import SettingsScreen from "../Screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
  style={{
    top: -30,
    justifyContent: "center",
    alignItems: "center",
    ...styles.shadow
  }}
   
    >
  <View style={{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:"e32f45"
  }}>
  {children}
  </View>
  </TouchableOpacity>
)

const Tabs = () =>{
  return(
    
<Tab.Navigator
tabBarOptions={{
  showLabel: false,
  style:{
  position: "absolute",
bottom: 25,
left: 20,
right: 20,
elevation: 0,
backgroundColor: '#ffffff',
borderRadius: 15,
height: 90,
...styles.shadow
  }
}}

>
<Tab.Screen
 name="Home" 
component={HomeScreen}
options = {{
  tabBarIcon: ({ focused }) => (
    <View style= {{ alignItems: "center", justifyContent: "center", top: 10 }}>
  <Image
  source={ require("../assets/snack-icon.png")}
  resizeMode = 'contain'
  style = {{
    width: 25,
    height: 25,
  tintColor: focused ? '#e32f45' : '#748c94',
}}
/>
  <Text
  style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}> 
  Home 
  </Text>
    </View>
    ),
  }}
/>
<Tab.Screen name="Find" component={FindScreen}
options = {{
  tabBarIcon: ({ focused }) => (
    <View style= {{ alignItems: "center", justifyContent: "center", top: 10 }}>
  <Image
  source={ require("../assets/snack-icon.png")}
  resizeMode = 'contain'
  style = {{
    width: 25,
    height: 25,
  tintColor: focused ? '#e32f45' : '#748c94',
}}
/>
  <Text
  style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}> 
  FIND 
  </Text>
    </View>
    ),
  }}
/>

<Tab.Screen name="Post" component={PostScreen}
options={{
  tabBarIcon: ({focused}) => (
<Image
source={require("../assets/snack-icon.png")}
resizeMode="contain"
style={{
  width:30,
  height:30,
  tintColor: "fff"
}}
/>
  ),
  TabBarButton: (props) => (
    <CustomTabBarButton {...props}/>
  )
}}
/>

<Tab.Screen name="Settings" component={SettingsScreen}
options = {{
  tabBarIcon: ({ focused }) => (
    <View style= {{ alignItems: "center", justifyContent: "center", top: 10 }}>
  <Image
  source={ require("../assets/snack-icon.png")}
  resizeMode = 'contain'
  style = {{
    width: 25,
    height: 25,
  tintColor: focused ? '#e32f45' : '#748c94',
}}
/>
  <Text
  style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}> 
  SETTINGS 
  </Text>
    </View>
    ),
  }}
/>
<Tab.Screen name="Chat" component={ChatScreen}
options = {{
  tabBarIcon: ({ focused }) => (
    <View style= {{ alignItems: "center", justifyContent: "center", top: 10 }}>
  <Image
  source={ require("../assets/snack-icon.png")}
  resizeMode = 'contain'
  style = {{
    width: 25,
    height: 25,
  tintColor: focused ? '#e32f45' : '#748c94',
}}
/>
  <Text
  style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}> 
  CHAT 
  </Text>
    </View>
    ),
  }}
/>
</Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  shadow:{
    shadowColor:"7F5DF0",
    shadowOffest: {
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius: 3.5,
    elevation:5
  }
});

export default Tabs;