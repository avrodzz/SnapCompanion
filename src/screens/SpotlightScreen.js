import React from 'react'
import { View, Text } from 'react-native'
import StatBar from '../components/StatBar'


export default function SpotlightScreen({navigation}) {
  return (
    <View>
        <View style={{ height:93}}>
        <StatBar screen="spotlight" navigation={navigation} />
      </View>
      <Text>Hello form Stories</Text>
    </View>
  )
}
