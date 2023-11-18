import { React } from "react";
import {
    View,
    Text,
    Button,
    Image,
    Pressable
} from "react-native";

export default function () {
    const message = () =>{
        console.log("Hello World");
    };

    const imagePress = () => {
        console.log("You have pressed the Image");
    };

    const textPress = () =>{
        console.log("You have pressed the Text!")
    };

    const onPressInMsg = () =>{
        console.log("You have pressed In!")
    };

    const onPressOutMsg = () =>{
        console.log("You have pressed Out!")
    };

    const longPressMsg = () =>{
        console.log("You have pressed the Text for 1 seconds!")
    }

    return (
        <>
        <View
        style={
            {
                alignItems:"center"
            }
        }>
            <Text>
                React Native Lesson: Button
            </Text>
            <Pressable
            onPress={imagePress}
            >
                <Image
                    source={
                    {
                        uri:"https://picsum.photos/200/300"
                    }
                }
                style={
                    {

                        height:200,
                        width:200,
                        margin:10
                    }
                }
                />
            </Pressable>
            <Pressable
            onPress={textPress}
            >
            <Text
            style={
                {
                    color:"darkblue",
                    margin:10,
                    fontSize:15
                }
            }
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            </Pressable>
            <Button
            title="Tap Me!"
            onPress={message}
            />
            <View
            style={
                {
                    margin:10,
                    color:"black"
                }
            }
            >
                <Text
                style={
                    {
                        fontSize:18,
                        fontWeight:700
                    } 
                }
                >
                    Press the Text!
                </Text>
                <Pressable
                onPressIn={onPressInMsg}
                onPressOut={onPressOutMsg}
                >
                    <Text
                    style={
                        {
                            margin:5,
                            fontSize:15,
                            fontWeight:700,
                            color:"white",
                            backgroundColor:"plum",
                        }
                    }
                    >
                        Press Me :)
                    </Text>
                </Pressable>
                <Pressable
                onLongPress={longPressMsg}
                onPressOut={onPressOutMsg}
                >
                    <Text
                    style={
                        {
                            margin:10,
                            fontSize:15,
                            fontWeight:700,
                            backgroundColor:"darkblue",
                            color:"white"
                        }
                    }
                    >
                        Press Me for a Second!
                    </Text>
                </Pressable>
            </View>
        </View>
        </>
    )
}