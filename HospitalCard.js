/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const hospitalCard = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('rakesh');
  const cardPress = () => {
    alert('You tapped on the card');
  };
  return (
    <TouchableOpacity onPress={cardPress}>
      <View>
        <Text>hospital Name</Text>
        <View
          style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Hospital area </Text>
          <Text>District</Text>
        </View>
        {/* <Text></Text>
              <Text></Text> */}
      </View>
    </TouchableOpacity>
  );
};
export default hospitalCard;
