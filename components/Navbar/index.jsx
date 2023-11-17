import { React } from "react";
import {
    View,
    Text,
    Image
} from "react-native";

const reactLogo = require("../../assets/react-logo.png");

export default function () {
    return (
        <>
        <View style={
            {
                height:50,
                width:'100%',
                backgroundColor:"black",
                alignItems:"center",
                flexDirection:"row"
            }
        }>
            <Image
            style={
                {
                    height:40,
                    width:40,
                    margin:5,
                    borderRadius:75,
                }
            }
            source={reactLogo}
            />

            <Text
            style={
                {
                    color:"white",
                    margin:5,
                    fontSize:15,
                }
            }>
                React Native Tutorial
            </Text>
        </View>
        </>
    )
}