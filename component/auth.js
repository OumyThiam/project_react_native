
import { KeyboardAvoidingView,
        Text,
        View,
        Image,
        TextInput,
    TouchableOpacity,} from 'react-native';
import styles from '../styles/style';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Auth() {
    const navigation = useNavigation(); // initialize the useNavigation hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            

                <View style={styles.container}>
                    <Image source = {require("../assets/aaron.jpeg")}/>



                    <Text style={styles.logoText}>Bienvenue</Text>

                    <Text style={styles.labelt1}>Email</Text>


                    <View style={styles.inputView}>


                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            keyboardType="email-address"
                            placeholderTextColor="#888888"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <Text style={styles.labelt2}>Mot de passe</Text>
                    <View style={styles.inputView}>
                        <View style={styles.pass}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Mot de passe"
                                placeholderTextColor="#888888"
                                secureTextEntry={!showPassword}
                                onChangeText={(password) => setPassword(password)}

                            />
                            <TouchableOpacity onPress={handlePasswordVisibility}>
                                <AntDesign style={styles.seeword}
                                           name={showPassword ? 'eyeo' : 'eye'}
                                           size={24}
                                           color="black"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgot_button}>Mot de passe oublié ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('profil')} >
                        <Text style={styles.loginText}>Connexion</Text>
                    </TouchableOpacity>
                    <View style={styles.inscription}>
                        <Text style={styles.text}>Pas encore membre ?</Text>
                        <TouchableOpacity >
                            <Text style={styles.signup_button}> S'inscrire</Text>
                        </TouchableOpacity>
                    </View>

                </View>
         
        </KeyboardAvoidingView>

    );
}

