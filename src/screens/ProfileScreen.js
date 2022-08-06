import React from 'react';
import { StyleSheet, SafeAreaView , ImageBackground, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BitmojiBottomSheet from '../components/BitmojiBottomSheet';


export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
      style={{
        height: 650,
        width: 390,
      }}
      source={require('../../assets/images/bitmoji/bitmoji_cat.png')} 
      resizeMode={'cover'}
      >
        
      <TouchableOpacity
        onPress = {()=>navigation.navigate("CompanionProfileScreen")}
        >
        <Image style={styles.max} source = {require('../../assets/images/bitmoji/max.png')}/>
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