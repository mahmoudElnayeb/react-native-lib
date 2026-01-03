import React from 'react';
import { Pressable } from 'react-native';
import { ButtonModel } from './Buton.model';
import styles from './Button.style';

export const ButtonComponent = ({
  size,
  type,
  disabled,
  onClick,
  ContentComponent,
}: ButtonModel) => {
  styles.useVariants({ size, type, disabled });
  return (
    <Pressable
      style={styles.buttonContainer}
      onPress={onClick}
      disabled={disabled}
    >
      {ContentComponent}
    </Pressable>
  );
};
