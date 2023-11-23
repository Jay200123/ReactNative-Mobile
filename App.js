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
  BoxModelLessons

 } from "./components";

 import {
  Home,
  Profile
 } from "./screens";



 const bgImg = require("./assets/dark-bg.jpg");

export default function App() {

  // const[modal, setModal] = useState(false);

  // const toogle = () => {
  //   setModal(newModal=>!newModal);
  // };

  return (
    <>
    <View style={
      {
        flex:1,
        backgroundColor:"plum",
        // backgroundColor:"white",
      }
    }>
        <StatusBar
      backgroundColor="black"
      barStyle="light-content"
      // hidden // hides the statusbar
      />
      <ScrollView>
         {/* components here */}
         <Navbar/>
         <BoxModelLessons/>
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
      </ScrollView>
    </View>
    </>
  );
}


