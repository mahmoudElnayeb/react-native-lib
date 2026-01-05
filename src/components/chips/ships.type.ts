export interface IChipProps {
  size: 'small' | 'medium' | 'large';
  type: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  label: string;
  icon?: React.ReactNode;
  iconDirection?: 'left' | 'right';
  selected?: boolean;
  onPress?: () => void;
}
