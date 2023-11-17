import { React } from "react";
import {
    View,
    Text
} from "react-native";

export default function () {
    return (
        <>
        <View
        style={
            {
                alignItems:"center",
                margin:10
            }
        }>
            <Text
            style={
                {
                    color:"white",
                    fontSize:18,
                    fontWeight:800
                }
            }
            > 
                About
            <Text
            style={
                {
                    color:"black",
                    fontSize:18,
                    fontWeight:800   
                }
            }
            >
                Me
            </Text> 
            </Text>
        </View>
        </>
    )
}