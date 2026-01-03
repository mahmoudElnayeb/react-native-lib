import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { AppText } from '../components/AppText';
import UserItem from '../components/UserItem';
import { AppIcon } from '../components/AppIcon';
import { colors } from '../config';

export const CardInfo = () => {
  return (
    <>
      <View>
        <Image source={require('../assets/jacket.jpg')} style={styles.image} />
        <View style={styles.infoContainer}>
          <AppText style={styles.title}>Red Jacket for Sale</AppText>
          <AppText style={styles.subTitle}>$100</AppText>
        </View>
      </View>

      <View>
        <UserItem
          title="Mosh Hamedani"
          subTitle="5 Listings"
          IconComponent={
            <AppIcon icon={'email'} backgroundColor={colors.primary} />
          }
          onPress={item => {
            console.log(item);
          }}
        />
        <UserItem
          title="Mahmoud Hamedani"
          subTitle="5 Listings"
          image={require('../assets/mosh.jpg')}
          onPress={item => {
            console.log(item);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  infoContainer: { padding: 20 },
  title: { fontSize: 20, fontWeight: '500' },
  subTitle: { fontSize: 25, color: 'green', fontWeight: '600' },
});
