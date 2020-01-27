import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { BuiltButton, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <BuiltButton {...rest}>
      {loading ? (
        <ActivityIndicator color="#FFF" size="small" />
      ) : (
        <Text>{children}</Text>
      )}
    </BuiltButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
