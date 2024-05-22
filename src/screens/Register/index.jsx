import { View, Text, TextInput, TouchableOpacity, SafeAreaViewBase } from 'react-native'
import styles from './styles'
import { useContext, useEffect, useState } from 'react'
const apiURL = process.env.EXPO_PUBLIC_API_URL;
import axios from "axios";
import { AuthContext } from '../../contexts/AuthContext';

export default function Register() {
    const { creationUser } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleRegister = async () => {
        await creationUser(name, email, password);
    }   
    return (
        <View style={styles.Maincontainer}>

            <View style={styles.container}>
                <Text style={styles.title}>Cadastrar</Text>
                <Text style={styles.subTitle}>Usuario:</Text>
                <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Escreva seu  nome de usuario" value={name} onChangeText={setName} />
                <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Escreva seu email" value={email} onChangeText={setEmail} />

                <Text style={styles.subTitle}>Senhas:</Text>
                <TextInput style={styles.input} placeholderTextColor={"#fff"} placeholder="Crie uma senha " value={password} onChangeText={setPassword} />

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Fazer Login</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}