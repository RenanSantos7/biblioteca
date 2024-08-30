import { StatusBar, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';

import theme from '../styles/themes/themeSwitcher';
import defaultStyles from '../styles/defaultStyles';
import DrawerRouter from '../routes/Drawer';

export default function App() {
  useEffect(() => {
		NavigationBar.setBackgroundColorAsync(theme.cores.background.light);
  }, []);
  
  return (
    <View style={styles.appContainer}>
      <StatusBar
        backgroundColor={theme.cores.background.main}
        barStyle='dark-content'
      />
      <DrawerRouter />
    </View>
  );
}

const styles = StyleSheet.create({
  ...defaultStyles
});
