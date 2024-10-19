// import React from "react";
// import { View,Text, TextInput,TouchableOpacity } from "react-native";
// import styles from "./styles";
// import { useNavigation } from "@react-navigation/native";



// const SignUpScreen = () => {
    
//     const navigation = useNavigation();
//     const handleLogin = () => {
//         navigation.navigate('LoginScreen');
//     }
//     return (
//         <View style={styles.container}>
//             <Text style={styles.emailStyle}>Email</Text>
//             <TextInput 
//             placeholder="Enter Your Email"
//             style={styles.emailTextInput}
//             />

//            <Text style={styles.emailStyle}>Password</Text>
//             <TextInput 
//             placeholder="Enter Your Password"
//             style={styles.emailTextInput}
//             />
//            <Text style={styles.emailStyle}>Phone Number</Text>
//             <TextInput 
//             placeholder="Enter Your Phone Number"
//             style={styles.emailTextInput}
//             />
//            <Text style={styles.emailStyle}>Address</Text>
//             <TextInput 
//             placeholder="Enter Your Address"
//             style={styles.emailTextInput}
//             />

//             <View style={styles.signupContainer}>
//                 <Text style={styles.textSignup}>Already have an account ?</Text>
//                 <TouchableOpacity onPress={handleLogin}>
//                 <Text style={styles.textSignupSecond}>Login</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// export default SignUpScreen;



















import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, ScrollView } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LOGIN_IMAGE1,  LOGIN_IMAGE3 } from "../../utils/ImageConstants";

const SignUpScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
                navigation.navigate('LoginScreen');
            }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#2F80ED" barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Image 
                    source={LOGIN_IMAGE1}
                    style={styles.upperImageStyle} 
                />
                <Text style={styles.loginText}>Register</Text>
                <Text style={styles.emailStyle}>Full Name</Text>
                <TextInput 
                    style={styles.emailTextInput}
                />
                <Text style={styles.emailStyle}>Email</Text>
                <TextInput 
                    style={styles.emailTextInput}
                />
                <Text style={styles.emailStyle}>Password</Text>
                <TextInput 
                    style={styles.emailTextInput}
                />
                <TouchableOpacity onPress={handleLogin}>
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
                    <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.registerText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.loginButton}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUpScreen;
