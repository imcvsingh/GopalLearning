// import React from "react";
// import { View,Text, TextInput,  TouchableOpacity ,StatusBar,Image,ScrollView} from "react-native";
// import styles from "./styles";
// import { useNavigation } from "@react-navigation/native";
// import { LOGIN_IMAGE1, LOGIN_IMAGE2 } from "../../utils/ImageConstants";


// const LoginScreen = () => {
//     const navigation = useNavigation();
//     const handleSignUp = () => {
//         navigation.navigate('SignUpScreen');
//       };
//     return (
//         <ScrollView>
//             <StatusBar backgroundColor="#2F80ED" barStyle="light-content"/>
//             <View style={{backgroundColor:'#ffffff'}}>
//                 <Image 
//                 source={LOGIN_IMAGE1}
//                 style={styles.upparImageStyle} />
           
//             <Text style={styles.loginText}>Login</Text>        
//             <Text style={styles.emailStyle}>Email</Text>
//             <TextInput 
//            // placeholder="Enter Your Email"
//             style={styles.emailTextInput}
//             />
//            <Text style={styles.emailStyle}>Password</Text>
//             <TextInput 
//             //placeholder="Enter Your Password"
//             style={styles.emailTextInput}
//             />
//             <TouchableOpacity onPress={handleSignUp}>
//                 <Text style={styles.textSignupSecond}>Forgot Password ?</Text>
//                 </TouchableOpacity>
//            </View>

            
//                 <Image 
//                 source={LOGIN_IMAGE2}
//                 style={styles.bottomImageStyle} />
          

//             <View style={styles.signupContainer}>
               
//                 <Text style={styles.textSignup}>Do not have account ?</Text>
                
//             </View>
            
//         </ScrollView>
//     )
// }

// export default LoginScreen;


import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, ScrollView } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LOGIN_IMAGE1, LOGIN_IMAGE2, LOGIN_IMAGE3 } from "../../utils/ImageConstants";

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleSignUp = () => {
        navigation.navigate('SignUpScreen');
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#2F80ED" barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Image 
                    source={LOGIN_IMAGE1}
                    style={styles.upperImageStyle} 
                />
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.emailStyle}>Email</Text>
                <TextInput 
                    style={styles.emailTextInput}
                />
                <Text style={styles.emailStyle}>Password</Text>
                <TextInput 
                    style={styles.emailTextInput}
                />
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.textSignupSecond}>Forgot Password?</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.bottomImageContainer}>
                <Image 
                    source={LOGIN_IMAGE3}
                    style={styles.bottomImageStyle}
                />
                <View style={styles.overlayTextContainer}>
                    <Text style={styles.overlayText}>New Here?</Text>
                    <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.loginButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
