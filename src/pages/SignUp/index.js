import React, { useRef, useState } from 'react';
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
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            autoFocus
            icon="perm-identity"
            placeholder="Informe seu e-mail"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail"
            placeholder="Informe seu e-mail"
            value={email}
            onChangeText={setEmail}
            ref={emailRef}
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
          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Criar conta</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
