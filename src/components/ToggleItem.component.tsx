import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from './AppText';
import { ToggleComponent } from './toggle/Toggle.component';
import { ToggleModalProps } from './toggle/toggle.modal';

export default function ToggleItemComponent({
  text,
  item,
}: {
  text: string;
  item: ToggleModalProps;
}) {
  return (
    <View style={styles.container}>
      <ToggleComponent
        onToggle={item.onToggle}
        size={item.size}
        disabled={item.disabled}
        isOn={item.isOn}
      />
      <AppText> {text} </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
