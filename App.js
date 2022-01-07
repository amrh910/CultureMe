import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar  barStyle="light-content" translucent={true} />
      <Text style={styles.text}>culture me</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'calibri'
  }
});
