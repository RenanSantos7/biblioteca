import { StatusBar, StyleSheet, Text, View } from 'react-native';
import theme from '../styles/themes/themeSwitcher';
import Home from '../pages/Home/Home';
import defaultStyles from '../styles/defaultStyles';

export default function App() {

  return (
    <View style={styles.appContainer}>
      <StatusBar
        backgroundColor={theme.cores.background.main}
        barStyle='dark-content'
      />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  ...defaultStyles
});
