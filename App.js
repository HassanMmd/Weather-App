import { SafeAreaView, StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import WeatherScreen from './app/Screens/WeatherScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <WeatherScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39328b',
    width:'100%',
  },
});
