import { 
  React,
  useState
 } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    Modal,
    Button
} from "react-native";

export default function () {

  const[contact, setContact] = useState(false);

  const[profile, setProfile] = useState(false);

  const okmsg = () =>{
    console.log("Ok Button pressed")
  };

  const cancelmsg = () =>{
    console.log("Cancel  Button pressed")
  };

  const options = [
    {
      text:"Ok",
      onPress:okmsg
    },
    {
      text:"Cancel",
      onPress:cancelmsg
    }
  ];

  const test = () =>{
    Alert.alert("Message", "Hello there!", options)
  };

  const aboutToogle = () =>{
    setProfile(p=>!p);
  };

  const contactToogle = () =>{
    setContact(c=>!c)
  }
    return (
        <>
         <View
      style={
        {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#333', // Background color
        height: 50, // Height of the footer
        paddingHorizontal: 20, // Horizontal padding
      }
    }
    >
      <TouchableOpacity
      onPress={test}
      >
        <Text
         style={
          { 
            color: 'white'
          }
        }>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={aboutToogle}
      >
        <Text
         style={
          {
             color: 'white'
           }
         }>
          About
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={contactToogle}
      >
        <Text
         style={
          {
             color: 'white'
          }
         }>
          Contact
        </Text>
      </TouchableOpacity>
    </View>
    <Modal
    visible={profile}
    animationType="fade"
    >
      <View
      style={
        {
          flex:1,
          backgroundColor:"darkblue",
          alignItems:"center"
        }
      }
      >
        <Text
        style={
          {
            color:"white",
            margin:5
          }
        }>
          About the developer
        </Text>
        <Button
        title="Go Back"
        onPress={aboutToogle}
        />
      </View>
    </Modal>
    <Modal
    visible={contact}
    animationType="fade"
    >
      <View
      style={
        {
          flex:1,
          alignItems:"center",
          backgroundColor:"grey"
        }
      }
      >
        <Text
        style={
          {
            color:"white"
          }
        }>
          Contact Forms
        </Text>
        <Button
        title="Go Back"
        onPress={contactToogle}
        />
      </View>
    </Modal>
        </>
    )
}