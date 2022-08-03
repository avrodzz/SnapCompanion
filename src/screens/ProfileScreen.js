

import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.homeScreenText}>Profile Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  homeScreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  homeScreenText: {
    fontSize: 32,
  },
});