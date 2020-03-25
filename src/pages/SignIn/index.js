import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Form,
  FormInput,
  SignLink,
  SignLinkText,
  SubmitButton,
} from './styles';

import Background from '~/components/Background';
import logo from '~/assets/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const passwordRef = useRef();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            autoFocus
            icon="mail"
            placeholder="Informe seu e-mail"
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock"
            placeholder="Informe sua senha"
            value={password}
            onChangeText={setPassword}
            ref={passwordRef}
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar
          </SubmitButton>
          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <SignLinkText>Criar conta</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
