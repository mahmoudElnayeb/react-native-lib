import React from 'react';

export type SelectionMode = 'single' | 'multiple';

export interface IChipItem {
  id: string | number;
  label: string;
  icon?: React.ReactNode;
  iconDirection?: 'left' | 'right';
  disabled?: boolean;
}

export interface IChipsGroupProps {
  items: IChipItem[];
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary' | 'tertiary';
  direction?: 'row' | 'column';
  selectionMode?: SelectionMode;
  initialSelectedIds?: (string | number)[];
  parentSelectedIds?: (string | number)[];
  onSelectionChange: (selectedItems: IChipItem[]) => void;
  allowDeselect?: boolean;
}
