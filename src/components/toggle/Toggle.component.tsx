/* eslint-disable react-native/no-inline-styles */
import { Pressable, Animated } from 'react-native';
import { ToggleModalProps } from './toggle.modal';
import styles, { sizeConfig } from './Toggle.stylesheet';
import { useState, useRef, useEffect } from 'react';

export const ToggleComponent = ({
  size = 'medium',
  isOn = false,
  disabled = false,
  onToggle,
}: ToggleModalProps) => {
  styles.useVariants({ size, disabled });
  const [toggleValue, setToggleValue] = useState<boolean>(!!isOn);

  const config = sizeConfig[size];
  const thumbTravel = config.width - config.thumbSize - config.padding * 3;

  const animatedValue = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  // Sync with isOn prop changes from Storybook controls
  useEffect(() => {
    setToggleValue(isOn);
    animatedValue.setValue(isOn ? 1 : 0);
  }, [isOn, animatedValue]);

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: toggleValue ? 1 : 0,
      useNativeDriver: false,
      friction: 8,
      tension: 40,
    }).start();
  }, [toggleValue, animatedValue]);

  const onChange = () => {
    setToggleValue(!toggleValue);
    onToggle(!toggleValue);
  };

  const trackBackgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', '#56d6acff'],
    extrapolate: 'clamp',
  });

  const thumbTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, thumbTravel],
    extrapolate: 'clamp',
  });

  const thumbBackgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#9CA3AF', 'white'],
    extrapolate: 'clamp',
  });

  const trackBackBorderColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#6b7280', '#56d6acff'],
    extrapolate: 'clamp',
  });

  return (
    <Pressable onPress={onChange} style={styles.container} disabled={disabled}>
      <Animated.View
        style={[
          styles.track,
          {
            backgroundColor: trackBackgroundColor,
            borderWidth: 1,
            borderColor: trackBackBorderColor,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX: thumbTranslateX }],
              backgroundColor: thumbBackgroundColor,
            },
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};
