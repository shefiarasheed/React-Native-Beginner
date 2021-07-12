import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import IconmoonConfig from '../../resources/fonts/selectionJson/selection.json';
import PropTypes from 'prop-types';


var CustomIcon = ({ color, size, name }) => {
  CustomIcon = createIconSetFromIcoMoon(IconmoonConfig);
  CustomIcon.loadFont();

  return (
    <>
<CustomIcon name={name}  size={size} color={color} />
    </>
  )
}
CustomIcon.defaultProps = {
  name: '',
  size: 0,
  color: '',
};

CustomIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
export default CustomIcon;
