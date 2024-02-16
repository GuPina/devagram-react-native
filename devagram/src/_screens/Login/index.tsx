import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../_assets/_components/Button';
import Input from '../../_assets/_components/Input';
import { useState } from 'react';
import UploadImage from '../../_assets/_components/UploadImage';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/RootStackParams';
import { NativeStackNavigationProp } from '@react-navigation/native-Stack';

const Login = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>
    const navigation = useNavigation<navigationTypes>()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
 


    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require('../../_assets/image/logo.png')} />

            <Input onChangeText={(e: string) => setEmail(e)}
                placeholder={"Digite seu e-mail"}
                icone={require('../../_assets/image/envelope.png')}
                value={email} />

            <Input onChangeText={(e: string) => setPassword(e)}
                placeholder={"Digite sua senha"}
                secureTextEntry={true}
                icone={require('../../_assets/image/key.png')}
                value={password} />
            <Button onPress={() => { }} placeholder="Login" loading={false} disabled={false} />

            <View style={styles.containerWithAccount}>
                <Text>Não possui uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textSignUp}>Faça seu cadastro agora!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Login
