import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image :{
       
        marginBottom: 30
    },


    inputView: {

        borderRadius: 30,
        width: '80%',
        height: 60,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    TextInput: {
        height: 55,
        flex: 1,
        padding: 10,
        marginLeft: 10,
        fontSize:15,
    },

    labelt1: {

        alignItems:'flex-start',
        justifyContent:'flex-start',
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        marginRight:240,
        marginBottom:10,
    },
    labelt2: {

        alignItems:'flex-start',
        justifyContent:'flex-start',
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        marginRight:180,
        marginBottom:10,
    },
    pass:{
        flexDirection: 'row',
        justifyContent:"space-between"

    },
    seeword:{
        marginTop:15,
        marginRight:10,

    },

    logoText:{
        fontSize:40,
        color: "#1ea18c",
        marginBottom:30,
    },


    forgot_button: {
        height: 30,
        marginLeft:120,
        color:"grey",
        fontSize:17,
    },
    signup_button:{

        color: '#569b8e',
        fontWeight: "bold",
        fontSize:17,


    },
    text:{
        fontWeight: "bold",
        fontSize:17,

    },

    inscription:{
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',


    },
    loginBtn: {
        width: '50%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#fc6426',

    },
    loginText: {
        color: 'white',
        fontWeight: "bold",
        fontSize:20,
    },
});

export default styles;