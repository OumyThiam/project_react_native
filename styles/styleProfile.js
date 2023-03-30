import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-between'

    },
    textInf:
        {
            fontSize:20,
            textAlign:'center',
            top:10,

        },
    qrcode:{
        maxHeight:200,
        width:250,
        backgroundColor:'#d1ece4',
        borderRadius:20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        marginBottom:20,
    },


    topBar:{

        maxHeight:130,
        width:'100%',
        backgroundColor:'#08a28f',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,

    },


    imgBar:{
        height:80,
        width:'30%',


    },
    option:{
        width:'100%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom:20,

    },
    bloc:{

        width:120,
        backgroundColor: 'white',
        flexDirection: 'column',
        padding:10,
        justifyContent: 'space-around',
        alignItems: 'center',
        fontWeight: 'bold',
        borderRadius:10,
        textAlign:'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 8,

    },
    choix:{
        fontWeight: 'bold'
    },


    bottomBarButton: {
        color:'black',

        padding: 10,
    },
    bottomBar: {
        width:'100%',
        height:80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 8,

    },

});
export default styles;