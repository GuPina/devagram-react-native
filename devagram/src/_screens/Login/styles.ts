import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../app.json'

const {height, width} = Dimensions.get("screen")

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.withColor,
        alignItems: 'center',
        justifyContent:'center',
    },
    logo:{
        marginBottom: height * 0.04
    },
    containerWithAccount:{
        marginTop: height * 0.04,
        alignItems: "center",

    },
    textSignUp: {
        fontSize: 14,
        color: colors.primaryColor,
        textDecorationLine:'underline',
        fontFamily: "Biennale-bold"
    }
});

export default styles