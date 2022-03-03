import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { message, id, name, type, data, value, onChange } = this.props;
    return (
      <label htmlFor="id">
        {`${message}:`}
        <input
          id={ id }
          name={ name }
          type={ type }
          onChange={ onChange }
          data-testid={ data }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  message: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Input;
