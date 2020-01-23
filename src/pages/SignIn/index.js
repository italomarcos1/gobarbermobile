import React from 'react';
import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function SignIn() {
  return (
    <Background>
      <Input icon="event" style={{ marginTop: 30 }} />
      <Button>Clique</Button>
    </Background>
  );
}
