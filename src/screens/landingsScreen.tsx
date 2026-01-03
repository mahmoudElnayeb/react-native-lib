import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../config/index';
import { AppText } from '../components/AppText';
import { AppButton } from '../components/AppButton';

export const LandingPage = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      fadeDuration={10}
      blurRadius={5}
      loadingIndicatorSource={require('../assets/background.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo-red.png')}
          style={{ width: 100, height: 100 }}
        />
        <AppText>Sell What you don't need</AppText>
      </View>
      <View style={styles.actionContainers}>
        <AppButton
          title="Login"
          color={colors.primary}
          textColor={colors.black}
          onPress={() => {}}
        />
        <AppButton
          title="Register"
          color={colors.secondary}
          textColor={colors.white}
          onPress={() => {}}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    gap: 10,
    alignItems: 'center',
  },
  text: {
    fontStyle: 'italic',
    fontSize: 20,
  },
  actionContainers: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  loginBtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBlockEnd: 10,
  },
  registerBtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
