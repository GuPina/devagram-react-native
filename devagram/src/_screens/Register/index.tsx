import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../_assets/_components/Button';
import Input from '../../_assets/_components/Input';
import { useEffect, useState } from 'react';
import UploadImage from '../../_assets/_components/UploadImage';
import communStyles from '../../communStyles'
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/RootStackParams';
import { NativeStackNavigationProp } from '@react-navigation/native-Stack';
import { validateName, validateEmail, validatePassword, validateConfirmPassword } from '../../_assets/image/_utils/validations';

const Register = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Register'>
    const navigation = useNavigation<navigationTypes>()
    const [image, setImage] = useState<any>(null)
    const [erro, setErro] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')


    const formIsValid = () => {
        const nameIsValid = validateName(name)
        const emailIsValid = validateEmail(email)
        const passwordIsValid = validatePassword(password)
        const confirmPasswordIsValid = validateConfirmPassword(password, confirmPassword)
        setErro('')

        if (!nameIsValid && name != '') {
            setErro('Nome invalido')

        }
        else if (!emailIsValid && email != '') {
            setErro('Emai invalido')
        } else if (!passwordIsValid && password != '') {
            setErro('Senha invalido')
        } else if (!confirmPasswordIsValid && confirmPassword != '') {
            setErro('As senhas não são iguais')
        } else {
            setErro('')
        }


    }
    useEffect(() => {
        formIsValid()
    }, [name, email, password, confirmPassword])

    return (
        <View style={styles.container}>
            <UploadImage setImage={setImage} image={image} />

            {erro != '' && <Text style={communStyles.textError}>{erro}</Text>}

            <Input onChangeText={(e: string) => setName(e)}
                placeholder={"Nome completo"}
                icone={require('../../_assets/image/user.png')}
                value={name} />

            <Input onChangeText={(e: string) => setEmail(e)}
                placeholder={"Digite seu e-mail"}
                icone={require('../../_assets/image/envelope.png')}
                value={email} />

            <Input onChangeText={(e: string) => setPassword(e)}
                placeholder={"Digite sua senha"}
                secureTextEntry={true}
                icone={require('../../_assets/image/key.png')}
                value={password} />

            <Input onChangeText={(e: string) => setConfirmPassword(e)}
                placeholder={"Confirmar Senha"}
                secureTextEntry={true}
                icone={require('../../_assets/image/key.png')}
                value={confirmPassword} />
            <Button onPress={() => { }} placeholder="Cadastrar" loading={false} disabled={erro != '' || name == '' || email == '' || password == '' || confirmPassword == ''} />

            <View style={styles.containerWithOutAccount}>
                <Text>Já possui uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textSignIn}>Faça seu login agora!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}


export default Register
