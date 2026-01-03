import React from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { AppText } from './AppText';
import { colors } from '../config';
export const AppButton = ({
  title,
  color,
  onPress,
  textColor,
}: {
  title: string;
  color?: string;
  textColor?: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableHighlight
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      underlayColor={color}
    >
      <AppText style={[styles.text, { color: textColor }]}>{title}</AppText>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
