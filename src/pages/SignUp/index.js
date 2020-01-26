import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Background from '~/components/Background';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SignLink,
  SignLinkText,
  SubmitButton,
} from './styles';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleRegister() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Nome do usuário"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            placeholder="E-mail da conta"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Senha de acesso"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => handleRegister}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton>Criar conta</SubmitButton>
          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Já tenho conta</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
