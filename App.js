import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import HolidayTable from './components/holiday-card/src/HolidayCard.js';

export default function App() {
  
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar  barStyle="light-content" translucent={true} />
      <Text style={styles.text}>culture me~{"\n"}</Text>
      <HolidayTable></HolidayTable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#1A202C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'System' //change font family to San Francisco (SF) on Prod
  }
});