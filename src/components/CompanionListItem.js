import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import {
  NativeBaseProvider,
  HStack,
  Circle,
  ScrollView,
} from "native-base";

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
                  <Circle size="67.61px" bg="light.300" />
                  <Circle size="67.61px" bg="light.300" />
                  <Circle size="67.61px" bg="light.300" />
                  <Circle size="67.61px" bg="light.300" />
                  <Circle size="67.61px" bg="light.300" />
                  <Circle size="67.61px" bg="light.300" />
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