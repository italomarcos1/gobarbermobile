import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';

import PropTypes from 'prop-types';
import Background from '~/components/Background';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

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
  const passwordRef = useRef();

  const dispatch = useDispatch();

  function handleSignIn() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            placeholder="E-mail da senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Senha de acesso"
            secureTextEntry
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            returnKeyType="send"
            onSubmitEditing={handleSignIn}
          />

          <SubmitButton onPress={handleSignIn}>Entrar</SubmitButton>

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
