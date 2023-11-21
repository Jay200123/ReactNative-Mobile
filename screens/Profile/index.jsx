import { React } from "react";
import { 
    Image,
    View,
    Text,
    Button,
    ScrollView
 } from "react-native";

 const profile = require("../../assets/profileImg.jpg");
 const university = require("../../assets/tup-icon.jpg");

export default function (data) {
    return (
        <>
        <View
        style={
            {
                alignItems:"center",
                margin:5
            }
        }>
            <ScrollView>
                <View
                style={
                    {
                        alignItems:"center",
                        margin:5
                    }
                }>
                    <Text
                    style={
                        {
                            fontSize:25,
                            fontWeight:900
                        }
                    }>
                        About Me
                    </Text>
                <Image
            style={
                {
                    height:300,
                    width:300,
                    margin:5,
                    borderRadius:150,
                }
            }
            source={profile}/>
            <Text
            style={
                {
                    color:"black",
                    fontSize:21,
                    fontWeight:800
                }
            }>
                Details
            </Text>
            <Text>
            Hello I'm Renyel Jay Sioc from BSIT-NS-3A 21 years old, 3rdYear BSIT Student from TUP Taguig.I'm from Central Bicutan, Taguig City, and I'm now pursuing a bachelor's degree in information technology. I enjoy playing online games like Mobile Legends and watching historical documentaries or, occasionally, motorcycle-related videos on YouTube.
            </Text>
                </View>
            <View
            style={
                {
                    alignItems:"center",
                    margin:5
                }
            }
            >
            <Text
            style={
                {
                    fontSize:18,
                    fontWeight:800,
                    margin:20,
                }
            }
            >
                The University Im Currently enrolled.
            </Text>
            <Image
            style={
                {
                    height:300,
                    width:300,
                    margin:5,
                    borderRadius:150,
                }
            }
            source={university}/>
            <Text
            style={
                {
                    fontSize:25,
                    fontWeight:800,
                    margin:20,
                }
            }
            >
               TUP Taguig
            </Text>
            <Text>
            The Technological University of the Philippines Taguig (TUP Taguig) is a public university located in the city of Taguig in Metro Manila, Philippines. It was established in 1977 and is one of the campuses of the Technological University of the Philippines (TUP) system.TUP Taguig offers undergraduate and graduate programs in various fields such as engineering, technology, business, education, and arts and sciences. The university is committed to providing quality education and aims to produce graduates who are globally competitive, innovative, and socially responsible.
            </Text>
            </View>
            <Button
            title="Go Back"
            onPress={data.press}
            />
            </ScrollView>            
        </View>
        </>
    )
}