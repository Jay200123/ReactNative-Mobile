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
  Footer
 } from "./components";

 import {
  Home,
  Profile
 } from "./screens";

 const bgImg = require("./assets/dragon_img.jpg");

export default function App() {

  const[modal, setModal] = useState(false);

  const toogle = () => {
    setModal(newModal=>!newModal);
  };

  return (
    <>
    <View style={
      {
        flex:1,
        // backgroundColor:"#D3D3D3"
        backgroundColor:"white",
      }
    }>
        <StatusBar
      backgroundColor="black"
      barStyle="light-content"
      // hidden // hides the statusbar
      />
      <ScrollView>
         {/* components here */}
         {/* <Navbar/> */}

         {/* Images & Text Lessons */}
        {/* <ViewsText/>
        <ImageViews/> */}

        {/* event handler lessons */}
        {/* <ButtonView/> */}

        {/* modal lessons  */}
        {/* <ModalLessons/> */}

        <Navbar/>
        {/* <ActivityIndicator
        size="medium"
        color="black"
        /> */}

        <Home/>
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
        <Footer/>
      </ScrollView>
    </View>
    </>
  );
}


