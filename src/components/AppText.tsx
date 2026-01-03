import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

export const AppText = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 18,
    fontWeight: '500',
  },
});
