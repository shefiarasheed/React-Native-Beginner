import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from 'prop-types'
const ElementsUICustomButton = ({ style, textStyle, title, enable, ...props }) => {
  return (
    <TouchableOpacity
      disabled={enable}
      onPress={props.onPress}
      activeOpacity={0.8}>
      <View style={style}>
        <Text style={textStyle}>  {title} </Text>
      </View>
    </TouchableOpacity>
  )
}
ElementsUICustomButton.defaultProps = {
  style: '',
  textStyle: '',
  title: '',
  enable: false,
  onPress: '',
};
ElementsUICustomButton.propTypes = {
  style: PropTypes.array,
  textStyle: PropTypes.array,
  title: PropTypes.string,
  enable: PropTypes.bool,
  onPress: PropTypes.func,
}
export default ElementsUICustomButton