/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// files
import { Text, TextProps } from './Themed';

export default function MonoText(props: TextProps): JSX.Element {
  const { style, ...otherProps } = props;

  return <Text style={[style, { fontFamily: 'space-mono' }]} {...otherProps} />;
}
