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
import ToggleItemComponent from './src/components/ToggleItem.component';
import { AppConfig } from './src/config/app.config';
import StorybookUIRoot from './.rnstorybook';

function App() {
  // Toggle between Storybook and main app based on config
  if (AppConfig.SHOW_STORYBOOK) {
    return <StorybookUIRoot />;
  }
  return <AppContent />;
}

function AppContent() {
  const handleAction = (value: boolean) => {
    console.log('Toggle is now: ', value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ToggleItemComponent
        text="terms & conditions"
        item={{
          size: 'medium',
          isOn: true,
          disabled: false,
          onToggle: handleAction,
        }}
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
