import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/sagas';
import { updateProfileRequest } from '~/store/modules/user/actions';

import Background from '~/components/Background';

import {
  Container,
  Title,
  Form,
  FormInput,
  LogoutButton,
  SubmitButton,
  Separator,
} from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();
  const newPasswordRef = useRef();
  const confPasswordRef = useRef();

  useEffect(() => {
    setPassword('');
    setNewPassword('');
    setConfPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({ name, email, password, newPassword, confPassword })
    );
  }

  function logout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Profile</Title>
        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Nome de usuário"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            placeholder="E-mail de acesso"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
          />
          <Separator />
          <FormInput
            icon="lock-outline"
            placeholder="Senha atual"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            returnKeyType="next"
            onSubmitEditing={() => newPasswordRef.current.focus()}
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Nova senha"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            returnKeyType="next"
            onSubmitEditing={() => confPasswordRef.current.focus()}
            ref={newPasswordRef}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Confirme sua senha"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            ref={confPasswordRef}
            value={confPassword}
            onChangeText={setConfPassword}
          />
          <SubmitButton onPress={handleSubmit}>Update Profile</SubmitButton>
          <LogoutButton onPress={logout}>Leave GoBarber</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person-outline" size={20} color={tintColor} />
  ),
};
