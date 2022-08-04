import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import {
  NativeBaseProvider,
  HStack,
  Circle,
  ScrollView,
} from "native-base";

import Jul_14 from '../../assets/images/savedJournalButtons/jul_14_button.png'
import Jun_23 from '../../assets/images/savedJournalButtons/jun_23_button.png'
import Mar_8 from '../../assets/images/savedJournalButtons/mar_8_button.png'
import Mar_2 from '../../assets/images/savedJournalButtons/mar_2_button.png'

export default function CompanionListItem(props) {

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
                    <Image source={Jul_14} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Jun_23} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Mar_8} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Mar_2} />
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