import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { MadeButton, TextButton } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <MadeButton {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="rgba(255, 255, 255, 0.6)" />
      ) : (
        <TextButton>{children}</TextButton>
      )}
    </MadeButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
