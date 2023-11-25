import { React } from "react";
import {
    View,
    Text,
    Image
} from "react-native";
const reactLogo = require("../../assets/react-logo.png");
const menuLogo = require("../../assets/menu.png");

export default function () {
    return (
        <>
        <View style={
            {
                height:50,
                width:'100%',
                backgroundColor:"transparent",
                alignItems:"center",
                flexDirection:"row",
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
            <View
            style={
                {
                    flexDirection:'row',
                    width:'100%',
                    flexWrap:'wrap',
                    alignItems:"center",
                    justifyContent:'space-between'
                }
            }
            >
            <Text
            style={
                {
                    color:"black",
                    margin:5,
                    fontSize:15,
                }
            }>
                Mobile App
            </Text>
            <Image
            source={menuLogo}
            style={
                {
                    height:20,
                    width:20,
                    marginRight:55
                }
            }
            />
            </View>
        </View>
        </>
    )
}