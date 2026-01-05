import { StyleSheet } from 'react-native-unistyles';

const styles = StyleSheet.create(() => ({
  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    gap: 6,
    variants: {
      size: {
        small: {
          paddingVertical: 6,
          paddingHorizontal: 10,
        },
        medium: {
          paddingVertical: 8,
          paddingHorizontal: 14,
        },
        large: {
          paddingVertical: 10,
          paddingHorizontal: 18,
        },
      },
      type: {
        primary: {
          backgroundColor: '#6200EE',
        },
        secondary: {
          backgroundColor: '#03DAC6',
        },
        tertiary: {
          backgroundColor: '#018786',
        },
      },
      selected: {
        true: {
          borderWidth: 1,
        },
        false: {},
      },
      disabled: {
        true: {
          backgroundColor: '#E0E0E0',
          opacity: 0.6,
        },
      },
    },
    compoundVariants: [
      {
        selected: true,
        type: 'primary',
        styles: {
          backgroundColor: '#9D46FF',
          borderColor: '#3700B3',
        },
      },
      {
        selected: true,
        type: 'secondary',
        styles: {
          backgroundColor: '#64FFDA',
          borderColor: '#00BFA5',
        },
      },
      {
        selected: true,
        type: 'tertiary',
        styles: {
          backgroundColor: '#4DB6AC',
          borderColor: '#00695C',
        },
      },
    ],
  },
  label: {
    fontWeight: '500',
    variants: {
      size: {
        small: {
          fontSize: 12,
        },
        medium: {
          fontSize: 14,
        },
        large: {
          fontSize: 16,
        },
      },
      type: {
        primary: {
          color: '#FFFFFF',
        },
        secondary: {
          color: '#000000',
        },
        tertiary: {
          color: '#FFFFFF',
        },
      },
      disabled: {
        true: {
          color: '#A0A0A0',
        },
      },
    },
  },
  icon: {
    variants: {
      size: {
        small: {
          width: 14,
          height: 17,
        },
        medium: {
          width: 18,
          height: 18,
        },
        large: {
          width: 22,
          height: 22,
        },
      },
    },
  },
}));

export default styles;
