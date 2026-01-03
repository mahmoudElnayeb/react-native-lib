export interface ButtonModel {
  ContentComponent: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  type:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-tertiary'
    | 'outline-no-border';
  disabled: boolean;
  onClick: () => void;
}
