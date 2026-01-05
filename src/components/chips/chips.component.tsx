import { Pressable, Text, View } from 'react-native';
import { IChipProps } from './chips.type';
import styles from './chips.style';

const InChips: React.FC<IChipProps> = ({
  id,
  size,
  type,
  disabled = false,
  label,
  icon,
  iconDirection = 'left',
  selected = false,
  onPress,
}) => {
  styles.useVariants({ size, type, disabled, selected });

  return (
    <Pressable
      disabled={disabled}
      style={styles.chipContainer}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected, disabled }}
      accessibilityLabel={label}
      testID={`chip-${id}`}
    >
      {iconDirection === 'left' && icon && (
        <View style={styles.icon}>{icon}</View>
      )}
      <Text style={styles.label}>{label}</Text>
      {iconDirection === 'right' && icon && (
        <View style={styles.icon}>{icon}</View>
      )}
    </Pressable>
  );
};
export default InChips;
