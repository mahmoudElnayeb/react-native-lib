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
import { AppIcon } from './src/components/AppIcon';
import { ButtonComponent } from './src/components/button/Button.component';
import ToggleItemComponent from './src/components/ToggleItem.component';
import { AppConfig } from './src/config/app.config';

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
      <ButtonComponent
        ContentComponent={
          <AppIcon size={50} image={require('./src/assets/mosh.jpg')} />
        }
        size={'medium'}
        type={'outline-no-border'}
        disabled={false}
        onClick={() => {
          console.log('Button clicked');
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
