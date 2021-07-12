import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types'
const ElementsUICustomTextView = ({style,title}) => {
    return (
      <Text style={style}>
         {title}
      </Text>
    );
  };

ElementsUICustomTextView.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  }
export default ElementsUICustomTextView;