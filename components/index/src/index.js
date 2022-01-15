import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import { HolidayTable } from '../../holidays-table/src/HolidayTable.js';

const Index = () => {
  
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar  barStyle="light-content" translucent={true} />
      <Text style={styles.text}>culture me{"\n"}</Text>
      <HolidayTable />
    </SafeAreaView>
  );
}

export default Index;

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