import { StyleSheet } from 'react-native-unistyles';

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 8,
    textAlign: 'center',
    flexWrap: 'nowrap',
    variants: {
      size: {
        small: {
          paddingVertical: 6,
          paddingHorizontal: 12,
          width: 100,
        },
        medium: {
          paddingVertical: 10,
          paddingHorizontal: 16,
          width: 150,
        },
        large: {
          paddingVertical: 14,
          paddingHorizontal: 20,
          width: 200,
        },
      },
      type: {
        primary: {
          backgroundColor: '#007bff',
        },
        secondary: {
          backgroundColor: '#6c757d',
        },
        tertiary: {
          backgroundColor: '#ffffff',
        },
        'outline-primary': {
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: '#007bff',
        },
        'outline-secondary': {
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: '#6c757d',
        },
        'outline-tertiary': {
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: '#ffffff',
        },
        'outline-no-border': {
          backgroundColor: 'transparent',
          borderWidth: 0,
        },
      },
      disabled: {
        true: {
          opacity: 0.5,
        },
        false: {
          opacity: 1,
        },
      },
    },
  },
});

export default styles;
