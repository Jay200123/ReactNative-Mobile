import {
     React,
     useState
 } from "react";
import {
    View,
    Text,
    Button,
    Modal,
    Image
} from "react-native";

export default function () {
    const[modal, setModal] = useState(false);

    const toogle = () =>{
        setModal(oldModal => !oldModal);
    };

    const onclose = () =>{
        setModal(false);
    }

    return (
        <>
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
                    color:"darkblue",
                    margin:5,
                    fontSize:15,
                    fontWeight:600
                }
            }
            >
                Modal Lesson for React Native
            </Text>
            <Button
            title="Show Image"
            color="plum"
            onPress={toogle}
            />
            <Modal
            visible={modal}
            animationType="slide" //slide or fade
            onRequestClose={onclose}
            >
                <View
                style={
                    {
                        flex:1,
                        margin:0,
                        alignItems:"center",
                        backgroundColor:"plum"
                    }
                }
                >
                    <Text
                    style={
                        {
                            fontSize:18,
                            fontWeight:600
                        }
                    }
                    >
                        Random Image from Picsum
                    </Text>
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
                            margin:5
                        }
                    }
                    />
                    <Button
                    title="Go Back"
                    onPress={toogle}
                    />
                </View>
            </Modal>
        </View>
        </>
    )
}