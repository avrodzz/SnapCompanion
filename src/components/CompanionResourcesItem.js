import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import {
  NativeBaseProvider,
  HStack,
  Circle,
  ScrollView,
} from "native-base";
import ActiveMindsButton from "../../assets/images/resourceButtons/active_minds_button.png"
import CrisisLineButton from "../../assets/images/resourceButtons/crisis_line_button.png"
import HeadSpaceButton from "../../assets/images/resourceButtons/headspace_button.png"
import HereForYouButton from "../../assets/images/resourceButtons/here_for_you_button.png"

export default function CompanionResourcesItem(props) {

  return (
    <View style={styles.container}>
       <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>{props.headerTextTitle}</Text>
       </View>
       <View style={styles.listContentContainer}>
          <NativeBaseProvider>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewContainer}>
                <HStack space={5}>
                  <TouchableOpacity>
                    <Image source={CrisisLineButton} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={HereForYouButton} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={HeadSpaceButton} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={ActiveMindsButton} />
                  </TouchableOpacity>
                </HStack>
              </ScrollView>
          </NativeBaseProvider>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15
  },
  headerTextContainer: {
    marginLeft: 23.98
  },
  headerText: {
    fontSize: 21.98
  },
  listContentContainer: {
    marginLeft: 23.98,
    marginTop: 20.83,
    width: 342.04,
  },
  scrollViewContainer: {
    // backgroundColor: 'red',
  }
});