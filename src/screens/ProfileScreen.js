import React from 'react';
import { StyleSheet, SafeAreaView , ImageBackground, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BitmojiBottomSheet from '../components/BitmojiBottomSheet';
import Bitmoji_Cat from '../../assets/images/bitmoji/bitmoji_cat.png'
import Max from '../../assets/images/bitmoji/max.png'


export default function ProfileScreen({ navigation }) {
  const onMaxPress = () => {
    navigation.navigate("CompanionProfileScreen")
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
      style={{
        height: 650,
        width: 390,
      }}
      source={Bitmoji_Cat} 
      resizeMode={'cover'}
      >
        
      <TouchableOpacity
        onPress = {onMaxPress}
        >
        <Image style={styles.max} source={Max} />
      </TouchableOpacity>
    </ImageBackground>
    
    <BitmojiBottomSheet />
 
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  homeScreenText: {
    fontSize: 32,
    marginTop: 50,
    marginLeft: 10
  },
  max: {
    width: 130,
    height: 400,
    marginLeft: "65%",
    marginTop: "80%",
  },
});