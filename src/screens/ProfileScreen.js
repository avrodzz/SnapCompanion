import React from 'react';
import { StyleSheet, SafeAreaView , ImageBackground, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BitmojiBottomSheet from '../components/BitmojiBottomSheet';
import Bitmoji_Cat from '../../assets/images/bitmoji/bitmoji_cat.png'
import Max from '../../assets/images/bitmoji/max.png'
import maxPhone from "../../assets/images/companion/iphone_size_max_green.png"
import maxAvatar from "../../assets/images/companion/max_icon_green.png";


export default function ProfileScreen({ navigation }) {
  const onMaxPress = () => {
    navigation.navigate("CompanionProfileScreen", {
      companionAvatarSrc: maxAvatar,
      companionName: 'Max',
      companionImageSrc: maxPhone,
      companionBirthday: 'August 6, 2022'
    })
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
        <Image style={styles.companion} source={Max} />
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
  companion: {
    width: 130,
    height: 400,
    marginLeft: "65%",
    marginTop: "80%",
  },
});