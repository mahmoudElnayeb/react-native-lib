/* eslint-disable react/self-closing-comp */
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../config/index';
import { AppIcon } from '../components/AppIcon';

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <View style={styles.closeIcon}>
          <AppIcon icon="close" size={60} iconColor={colors.white} />
        </View>
        <View style={styles.deleteIcon}>
          <AppIcon icon="delete" size={60} iconColor={colors.white} />
        </View>
      </View>
      <Image source={require('../assets/chair.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  actionsContainer: {},
  closeIcon: {
    borderRadius: 10,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    borderRadius: 10,
    position: 'absolute',
    top: 40,
    right: 30,
  },
});
