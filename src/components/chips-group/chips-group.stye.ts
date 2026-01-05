import { StyleSheet } from 'react-native-unistyles';

const styles = StyleSheet.create(() => ({
  container: {
    flexWrap: 'wrap',
    gap: 8,
    variants: {
      direction: {
        row: {
          flexDirection: 'row',
        },
        column: {
          flexDirection: 'column',
        },
      },
    },
  },
}));

export default styles;
