import {
  React,
  useState
} from "react";

import { 
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Modal,
  Button,
  ActivityIndicator
 } from 'react-native';

 import {
  Navbar,
  ViewsText,
  ImageViews,
  ButtonView,
  ModalLessons,
  StatusBarLessons,
  Footer,
  BoxModelLessons,
  LayoutLessons

 } from "./components";

 import {
  Home,
  Profile
 } from "./screens";



 const bgImg = require("./assets/dark-bg.jpg");

export default function App() {

  // const toogle = () => {
  //   setModal(newModal=>!newModal);
  // };

  return (
    <>
    {/* <View style={
      {
        flex:1,
        backgroundColor:"white",
      }
    }>
        <StatusBar
      backgroundColor="white"
      barStyle="dark-content"
      // hidden // hides the statusbar
      /> */}

      {/* <ScrollView> */}
         {/* components here */}
         <StatusBar
         backgroundColor="white"
         barStyle="dark-content"
        //  hidden
         />
         <Navbar/>
         <View
         style={
          {
            // flex:1,
            // flexDirection:"row",
            // justifyContent:"space-between",
            // flexWrap:"wrap",
            // height:300,
            // // justifyContent:"space-between",
            // // alignItems:'baseline',
            // // alignItems:"flex-end",
            // backgroundColor:"transparent",
            // borderWidth:6,
            // borderColor:"red"

            flex:1,
            // height:300,
            // gap:10,
            borderWidth:6,
            borderColor:"darkblue",
            // flexDirection:"row-reverse",
            // alignItems:'flex-start',
            // flexWrap:'wrap'

            // flexWrap:'wrap',
            // justifyContent:"center",

            // flexDirection:"column",
            // alignItems:"flex-start",

            // alignItems:'flex-start',
            // flexWrap:'wrap',

            // rowGap:20,
            // columnGap:20,
            // gap:10

            // flexWrap:'wrap',
            // flexDirection:"row",
            // alignContent:'flex-end'

  
          }
         }>
          <LayoutLessons style={{backgroundColor:"#8a2be2",}}>Box 1</LayoutLessons>
         <LayoutLessons style={{backgroundColor:"#deb887",}}>Box 2</LayoutLessons>
         <LayoutLessons style={{backgroundColor:"#6495ed",}}>Box 3</LayoutLessons>
         <LayoutLessons style={{backgroundColor:"#008b8b", }}>Box 4</LayoutLessons>
         <LayoutLessons style={{backgroundColor:"#bdb76b",}}>Box 5</LayoutLessons>
         <LayoutLessons style={{backgroundColor:"#483d8b"}}>Box 6</LayoutLessons>
         <LayoutLessons style={{backgroundColor:"#ff1493"}}>Box 7</LayoutLessons>
         <LayoutLessons style={{backgroundColor:"#dc143c"}}>Box 8</LayoutLessons>
       
         </View>
         {/* <BoxModelLessons/> */}
         {/* Images & Text Lessons */}
        {/* <ViewsText/>
        <ImageViews/> */}

        {/* event handler lessons */}
        {/* <ButtonView/> */}

        {/* modal lessons  */}
        {/* <ModalLessons/> */}

        {/* <ActivityIndicator
        size="medium"
        color="black"
        /> */}

        {/* <Home/>
        <Button
        title="About the Developer"
        onPress={toogle}
        />
        <Modal
        visible={modal}
        animationType="slide"
        >
          <Profile
           press={()=>toogle()}
           />
        </Modal>
        <Footer/> */}

        {/* <View
        style={styles.container}
        >
          <ImageBackground
          style={
            {
              flex:1
            }
          }
          source={bgImg}
          >
            <Text
            style={styles.headers}
            >
           Facts about React Native
          </Text>
          </ImageBackground>
        </View> */}
      {/* </ScrollView> */}
    {/* </View> */}
    </>
  );
}


