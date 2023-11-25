import {
    View,
    Text,
    StyleSheet
} from "react-native";

export default function ({children, style}) {
    return (
        <>
        <View
        style={[styles.box, style]}
        >
            <Text
            style={styles.boxText}
            >
                {children}
            </Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:"#ffffff",
        padding:20,
        width:100,
        height:100
    },
    boxText:{
        fontSize:24,
        fontWeight:"900",
        textAlign:"center"
    }
})