import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Title,
  Separator,
  Form,
  FormInput,
  LogoutButton,
  SubmitButton,
} from './styles';

Icon.loadFont();

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const newPasswordRef = useRef();
  const confPasswordRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfPassword('');
  }, [profile]); // porque os campos referenciam os campos do profile, não são instâncias

  function updateProfile() {
    if (name && email && oldPassword) {
      dispatch(
        updateProfileRequest({
          name,
          email,
          oldPassword,
          password,
          confirmPassword,
        })
      );
    }
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
            placeholder="E-mail de acesso"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            placeholder="Sua senha atual"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => newPasswordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Sua nova senha"
            secureTextEntry
            returnKeyType="next"
            onSubmitEditing={() => confPasswordRef.current.focus()}
            ref={newPasswordRef}
            value={password}
            onChangeText={setPassword}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Confirmação de senha"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={updateProfile}
            ref={confPasswordRef}
            value={confirmPassword}
            onChangeText={setConfPassword}
          />

          <SubmitButton onPress={updateProfile}>Atualizar Perfil</SubmitButton>
          <LogoutButton onPress={logout}>Log out</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
