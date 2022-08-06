import React, { useRef } from 'react';
import { View, Text, StyleSheet, } from 'react-native'
import StatBar from '../components/StatBar'

const StoriesScreen = ({ navigation }) => {
  const cameraRef = useRef(null);
  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
      <View>
      {/* <View style={{ height:93}}>
        <StatBar screen="map" navigation={navigation} />
      </View>
        
        <Text>
          Stories Page
        </Text> */}
      </View>
  )
}


const styles = StyleSheet.create({
  safeWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    position: 'relative',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  snapWrapper: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    top: 50,
    left: 16,
    right: 16,
  },
  snapText: {
    fontSize: 14,
    color: 'red',
  },
});

export default StoriesScreen;
