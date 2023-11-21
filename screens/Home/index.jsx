import React from "react";
import {
    View,
    Text,
    ImageBackground
} from "react-native";

import {
    HomeContent
} from "../../components";

import home from "../../data/home";

const bg = require("../../assets/react-logo.png");

export default function () {
    
    const newContent = home.map((h)=>{
        return <HomeContent {...h} key={h.id}/>
    });

    return (
        <>
        <View>
            <Text
            style={
                {
                    fontSize:25,
                    fontWeight:700,
                    color:"black",
                    margin:5,
                }
            }
            >
               Facts About React Native
            </Text>

            <View>
                <ImageBackground
                source={bg}
                style={
                    {
                      flex:1
                    }
                }
                >
                    {newContent}
                </ImageBackground>
            </View>
        </View>
        </>
    )
}