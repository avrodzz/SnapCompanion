

import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView , ImageBackground, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BitmojiBottomSheet from '../components/BitmojiBottomSheet';


export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={{...styles.homeScreen}}>
      <ImageBackground
      style={{
        resizeMode: "cover",
        height: 500,
        width: 400,
        marginTop:50
      }}
      source={require('../../assets/bitmoji-cat.png')} 
      >
        
        <TouchableOpacity
        onPress = {()=>navigation.navigate("Spotlight")}
        >
          <Image style={styles.max} 
                 source = {require('../../assets/max.png')}/>
        </TouchableOpacity>

    </ImageBackground>
      <BitmojiBottomSheet />

       
    </SafeAreaView>
   
    // <View style={styles.homeScreen}>
    
    //   {/* <Text style={styles.homeScreenText}>Profile Screen</Text> */}
    //   <CompanionBottomSheet />
      
    // </View>
  );
}


const styles = StyleSheet.create({
  homeScreen: {
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
    position: 'fixed',
    marginLeft: "65%",
    marginTop: "54%",
  },
});