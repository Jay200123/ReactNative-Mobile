import { 
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView
 } from 'react-native';

 import {
  Navbar,
  ViewsText,
  ImageViews,
  ButtonView
 } from "./components";

 const bgImg = require("./assets/dragon_img.jpg");

export default function App() {
  return (
    <>
    <View style={
      {
        flex:1,
        marginTop:30,
        backgroundColor:"#D3D3D3"
      }
    }>
      <ScrollView>
         {/* components here */}
         <Navbar/>

        {/* <ViewsText/>
        <ImageViews/> */}

        <ButtonView/>


      </ScrollView>
    </View>
    </>
  );
}


