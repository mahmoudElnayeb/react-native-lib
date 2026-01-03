import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const AppIcon = ({
  size = 60,
  image,
  icon,
  iconColor = 'white',
  backgroundColor = 'transparent',
}: {
  size?: number;
  image?: any;
  icon?: any;
  iconColor?: string;
  backgroundColor?: string;
}) => {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
      ]}
    >
      {image && (
        <Image
          source={image}
          style={{ width: size, height: size, borderRadius: size / 2 }}
        />
      )}
      {icon && <Icon name={icon} size={size * 0.5} color={iconColor} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
