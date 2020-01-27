import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Wrapper, BuiltInput } from './styles';

Icon.loadFont();

function Input({ icon, style, ...rest }, ref) {
  return (
    <Wrapper style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
      <BuiltInput {...rest} ref={ref} />
    </Wrapper>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
};

Input.defaultProps = {
  style: {},
  icon: null,
};

export default forwardRef(Input);
