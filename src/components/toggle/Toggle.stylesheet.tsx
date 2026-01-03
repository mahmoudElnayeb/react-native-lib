import { StyleSheet } from 'react-native-unistyles';

// Dimension configurations for each size
export const sizeConfig = {
  small: { width: 44, height: 22, thumbSize: 16, padding: 3 },
  medium: { width: 60, height: 30, thumbSize: 22, padding: 3 },
  large: { width: 80, height: 40, thumbSize: 30, padding: 3 },
};

const styles = StyleSheet.create({
  container: {
    variants: {
      disabled: {
        true: { opacity: 0.5 },
        false: { opacity: 1 },
      },
    },
  },

  track: {
    justifyContent: 'center',
    variants: {
      size: {
        small: {
          width: sizeConfig.small.width,
          height: sizeConfig.small.height,
          borderRadius: sizeConfig.small.height / 2,
          paddingHorizontal: sizeConfig.small.padding,
        },
        medium: {
          width: sizeConfig.medium.width,
          height: sizeConfig.medium.height,
          borderRadius: sizeConfig.medium.height / 2,
          paddingHorizontal: sizeConfig.medium.padding,
        },
        large: {
          width: sizeConfig.large.width,
          height: sizeConfig.large.height,
          borderRadius: sizeConfig.large.height / 2,
          paddingHorizontal: sizeConfig.large.padding,
        },
      },
    },
  },
  thumb: {
    variants: {
      size: {
        small: {
          width: sizeConfig.small.thumbSize,
          height: sizeConfig.small.thumbSize,
          borderRadius: sizeConfig.small.thumbSize / 2,
        },
        medium: {
          width: sizeConfig.medium.thumbSize,
          height: sizeConfig.medium.thumbSize,
          borderRadius: sizeConfig.medium.thumbSize / 2,
        },
        large: {
          width: sizeConfig.large.thumbSize,
          height: sizeConfig.large.thumbSize,
          borderRadius: sizeConfig.large.thumbSize / 2,
        },
      },
    },
  },
});

export default styles;
