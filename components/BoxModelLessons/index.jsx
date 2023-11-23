import {
    View,
    Text,
    StyleSheet
} from "react-native";

export default function () {
    return (
        <>
        <View
        style={styles.container}
        >
            <View
            style={
                [styles.box, styles.darkbgContainer]
            }
            >
                <Text
                style={
                    styles.boxText
                }
                >
                    Style Inheritance Lessons
                    <Text
                    style={
                        {
                            fontWeight:'900'
                        }
                    }
                    >
                        This is a bold text
                    </Text>
                </Text>
            </View>
            <View
            style={
                [styles.box, styles.dbContainer, styles.boxShadow1]
                }>
            <Text
            style={styles.boxText}
            >
                This is a Dark Blue Box
            </Text>
            </View>
            <View
            style={
                [styles.box, styles.lgContainer, styles.boxShadow]
                }>
            <Text>
                This is a LightGreen Box 
            </Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:60,
        paddingVertical:30,
    },
    box:{
        height:250,
        width:250,
        // padding:10
        paddingHorizontal:60,
        paddingVertical:100,
        marginHorizontal:10,
        marginVertical:10,
        borderWidth:1,
        borderColor:"white",
        borderRadius:5
    },
    darkbgContainer:{
        backgroundColor:"black"
    },
    dbContainer:{
        backgroundColor:"darkblue"
    },
    lgContainer:{
        backgroundColor:'lightgreen'
    },
    boxText:{
        color:"white"
    },
    boxShadow:{
        elevation:10
    },
    boxShadow1:{ //this style props only works in IOS
        shadowColor:"grey",
        shadowOffset:{
            width:6,
            height:6
        },
        shadowOpacity: 0.6,
        shadowRadius:4   
    }

})