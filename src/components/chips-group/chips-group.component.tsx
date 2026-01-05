import React, { useState, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { IChipsGroupProps, IChipItem } from './chips-group.component.type';
import styles from './chips-group.stye';
import InChips from '../chips/chips.component';

const InChipsGroup: React.FC<IChipsGroupProps> = ({
  items,
  size = 'medium',
  type = 'primary',
  direction = 'row',
  selectionMode = 'multiple',
  initialSelectedIds = [],
  parentSelectedIds,
  onSelectionChange,
  allowDeselect = true,
}) => {
  // id consumer need to set parentSelectedIds to control selection from outside
  const hasParentSelectedIds = parentSelectedIds !== undefined;
  styles.useVariants({ direction });

  const [newSelectedIds, setNewSelectedIds] = useState<Set<string | number>>(
    () => new Set(initialSelectedIds),
  );
  const currentSelectedIds = useMemo(
    () => (hasParentSelectedIds ? new Set(parentSelectedIds) : newSelectedIds),
    [hasParentSelectedIds, parentSelectedIds, newSelectedIds],
  );

  const getSelectedItems = useCallback(
    (ids: Set<string | number>): IChipItem[] => {
      return items.filter(item => ids.has(item.id));
    },
    [items],
  );

  const isChipSelected = useCallback(
    (chipId: string | number): boolean => {
      return currentSelectedIds.has(chipId);
    },
    [currentSelectedIds],
  );

  const handleChipPress = useCallback(
    (chipId: string | number) => {
      const updateSelection = (
        prevIds: Set<string | number>,
      ): Set<string | number> => {
        const newIds = new Set(prevIds);
        const isCurrentlySelected = newIds.has(chipId);
        if (selectionMode === 'single') {
          if (isCurrentlySelected && allowDeselect) {
            newIds.clear();
          } else if (!isCurrentlySelected) {
            newIds.clear();
            newIds.add(chipId);
          }
        } else if (isCurrentlySelected) {
          newIds.delete(chipId);
        } else {
          newIds.add(chipId);
        }
        return newIds;
      };

      if (hasParentSelectedIds) {
        const newIds = updateSelection(currentSelectedIds);
        const selectedItems = getSelectedItems(newIds);
        onSelectionChange(selectedItems);
      } else {
        setNewSelectedIds(prev => {
          const newIds = updateSelection(prev);
          const selectedItems = getSelectedItems(newIds);
          onSelectionChange(selectedItems);
          return newIds;
        });
      }
    },
    [
      selectionMode,
      allowDeselect,
      hasParentSelectedIds,
      currentSelectedIds,
      getSelectedItems,
      onSelectionChange,
    ],
  );

  return (
    <View style={styles.container} accessibilityRole="radiogroup">
      {items.map(item => (
        <InChips
          key={item.id}
          id={item.id}
          size={size}
          type={type}
          label={item.label}
          icon={item.icon}
          iconDirection={item.iconDirection}
          disabled={item.disabled}
          selected={isChipSelected(item.id)}
          onPress={() => !item.disabled && handleChipPress(item.id)}
        />
      ))}
    </View>
  );
};

export default InChipsGroup;
