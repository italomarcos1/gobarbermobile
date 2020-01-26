import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Background from '~/components/Background';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SignLink,
  SignLinkText,
  SubmitButton,
} from './styles';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const passwordRef = useRef();

  function handleLogin() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="E-mail da conta"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Senha de acesso"
            secureTextEntry
            returnKeyType="send"
            ref={passwordRef}
            onSubmitEditing={() => handleLogin}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={() => handleLogin}>Entrar</SubmitButton>
          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <SignLinkText>Criar conta</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
