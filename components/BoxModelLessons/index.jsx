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
            style={[styles.box, styles.dbContainer]}>
            <Text>
                This is a Dark Blue Box
            </Text>
            </View>
            <View
            style={[styles.box, styles.lgContainer]}>
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
        flex:1,
        padding:60,
        backgroundColor:'plum'
    },
    box:{
        height:100,
        width:100,
        padding:60
    },
    dbContainer:{
        backgroundColor:"darkblue"
    },
    lgContainer:{
        backgroundColor:'lightgreen'
    }

})