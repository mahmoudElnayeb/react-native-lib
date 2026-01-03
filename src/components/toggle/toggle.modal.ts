export interface ToggleModalProps {
  size?: 'small' | 'medium' | 'large';
  isOn?: boolean;
  disabled?: boolean;
  onToggle: (value: boolean) => void;
}
