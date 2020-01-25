import React, { useRef } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SignLink,
  SignLinkText,
  SubmitButton,
} from './styles';
import logo from '~/assets/logo.png';

export default function SignIn({ navigation }) {
  const ref = useRef();

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            placeholder="E-mail da conta"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => ref.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Senha de acesso"
            secureTextEntry
            ref={ref}
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />

          <SubmitButton onPress={() => {}}>Entrar</SubmitButton>

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
