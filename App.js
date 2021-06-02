/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  LogBox,
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
import firestore from '@react-native-firebase/firestore';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}> Covid-19 Helpdesk</Text>
    </View>
  );
};

const Card = props => {
  const {hospital} = props;
  const [show, setShow] = useState(false);
  const [mandal, setMandal] = useState('');
  const [district, setDistrict] = useState('GHMC');
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [hospitals, setHospitals] = useState([]);
  const [found, setFound] = useState(false);

  const cardPress = () => {
    alert('You tapped on the card');
  };
  return (
    <TouchableOpacity onPress={cardPress}>
      <View style={styles.card}>
        <Text>{hospital.name}</Text>
        <View
          style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Hospital area</Text>
          <Text>District</Text>
        </View>
        {/* <Text></Text>
        <Text></Text> */}
      </View>
    </TouchableOpacity>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [hospitals, setHospitals] = useState([]);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    firestore()
      .collection('hospitals')
      .onSnapshot(snapshot => {
        setHospitals([]);
        snapshot.forEach(snap => {
          setHospitals(prevState => [...prevState, snap.data()]);
        });
      });
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor="#0b61b7" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        {hospitals.length > 0
          ? hospitals.map(hospital => <Card hospital={hospital} />)
          : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1e78d3',
    color: 'white',
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 6,
    margin: 2,
  },
  headerTitle: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

//   /* <View
//   style={{
//     backgroundColor: isDarkMode ? Colors.black : Colors.white,
//   }}>
//   <Section title="Step One">
//     Edit <Text style={styles.highlight}>App.js</Text> to change this
//     screen and then come back to see your edits.
//   </Section>
//   <Section title="See Your Changes">
//     <ReloadInstructions />
//   </Section>
//   <Section title="Debug">
//     <DebugInstructions />
//   </Section>
//   <Section title="Learn More">
//     Read the docs to discover what to do next:
//   </Section>
//   <LearnMoreLinks />
// </View> */

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };
