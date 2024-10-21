// import { StyleSheet } from "react-native";

// const styles =  StyleSheet.create({
//     container:{
//        flex:1
//     },
//     emailStyle:{
//         color:'black',
//         fontSize:12,
//         fontSize:18,
//         fontWeight:'500',
//         paddingTop:20,
//         marginLeft:10
//     },
//     emailTextInput:{
//         borderWidth:2,
//         borderColor:'#000000',
//         marginLeft:10,
//         marginRight:10,
//     },
//     signupContainer:{
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 70,
//         flexDirection:'row'
//     },
//     textSignup:{
//         color: 'black',
//         fontSize: 15,
//     },
//     textSignupSecond:{
//     textDecorationLine: 'underline',
//     color: '#000000',
//     fontWeight: 'bold',
//     fontSize: 15,
//     marginLeft:6
//     },
// })

// export default styles;
















import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#ffffff',
        justifyContent: 'space-between', 
    },
    scrollViewContent: {
        flexGrow: 1, 
        justifyContent: 'center', 
        paddingBottom: 115, 
    },
    upperImageStyle: {
        width: '100%',
        height: '72.8%',
    },
    loginText: {
        color: '#2F80ED',
        marginLeft: 18,
        fontSize: 25,
        fontWeight: '500',
    },
    emailStyle: {
        color: '#2F80ED',
        fontSize: 16,
        fontWeight: '400',
        paddingTop: 20,
        marginLeft: 18,
    },
    emailTextInput: {
        borderWidth: 1,
        borderColor: '#2F80ED',
        marginLeft: 18,
        marginRight: 70,
        borderRadius: 8,
        height: 40, 
    },
    bottomImageContainer: {
        position: 'relative', 
        width: '100%', 
        height: '25%', 
    },
    bottomImageStyle: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'cover', 
    },
    overlayTextContainer: {
        position: 'absolute',
        bottom: 2, 
        left: 5, 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 5, 
        borderRadius: 5,
    },
    overlayText: {
        color: 'white',
        fontSize: 16,
        marginRight: 5, 
    },
    registerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    loginButton:{
       marginLeft:145,
       marginBottom:25,
       color: 'white',
       fontSize: 18,
       fontWeight: '600',

    },
    textSignupSecond: {
        color: '#2F80ED',
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 208,
        marginTop: 10,
    },
});

export default styles;
