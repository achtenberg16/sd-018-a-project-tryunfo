import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  render() {
    const { value } = this.props;
    return <option>{value}</option>;
  }
}
Option.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Option;
