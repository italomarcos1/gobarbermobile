import React from 'react';
import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function SignIn() {
  return (
    <Background>
      <Input icon="lock-outline" style={{ marginTop: 30 }} />
      <Button loading={false}>Hey ya</Button>
    </Background>
  );
}
