import React from 'react';
import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  const { style, ...otherProps } = props;
  const newStyle = {style, fontFamily: 'SpaceMono' };
  
  return <Text {...otherProps} style={newStyle} />;
}


