import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { AppText } from './AppText';
import { colors } from '../config';

export const CardItem = ({
  title,
  price,
  image,
}: {
  title: string;
  price: string;
  image: any;
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{price}</AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',

    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  infoContainer: {
    display: 'flex',
    gap: 5,
    padding: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
