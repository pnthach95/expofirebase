import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '@react-native-firebase/app'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(firebase.app().options, null, 2)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
