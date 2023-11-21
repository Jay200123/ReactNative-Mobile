import { React } from "react";
import {
    View,
    Text
} from "react-native";

export default function (data) {
    return (
        <>
        <View>
            <Text
            style={
                {
                    fontSize:15,
                    fontWeight:800,
                    margin:5,
                    textDecorationLine: 'underline',
                }
            }>
                {data.id}.) {data.title}
            </Text>

            <Text
            style={
                {
                    fontSize:13,
                    fontWeight:600,
                    margin:3
                }
            }
            >
                {data.info}
            </Text>
        </View>
        </>
    )
}