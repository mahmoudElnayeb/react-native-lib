/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

if (__DEV__) {
  require('./ReactotronConfig');
}

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StorybookUIRoot from './.rnstorybook';
import InChipsGroup from './src/components/chips-group/chips-group.component';
import { AppConfig } from './src/config/app.config';
import Icon from 'react-native-vector-icons/MaterialIcons';

function App() {
  // Toggle between Storybook and main app based on config
  if (AppConfig.SHOW_STORYBOOK) {
    return <StorybookUIRoot />;
  }
  return <AppContent />;
}

function AppContent() {
  return (
    <SafeAreaView style={styles.container}>
      <InChipsGroup
        items={[
          { id: 1, label: 'Chip One' },
          { id: 2, label: 'Chip Two', disabled: true },
          {
            id: 3,
            label: 'Chip Three',
            icon: <Icon name="email" size={20}></Icon>,
            iconDirection: 'left',
          },
          {
            id: 4,
            label: 'Chip Four',
            icon: <Icon name="email" size={20}></Icon>,
            iconDirection: 'right',
          },
        ]}
        size="large"
        type="secondary"
        direction="column"
        selectionMode="single"
        initialSelectedIds={[3]}
        onSelectionChange={selectedItems => {
          console.log(selectedItems);
        }}
        allowDeselect={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#ebe8e8ff',
  },
});

export default App;
