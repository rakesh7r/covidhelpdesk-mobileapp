import React, {useEffect, useState} from 'react';
import {
  Button,
  Picker,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import firestore from '@react-native-firebase/firestore';
import HospitalScreen from './HospitalScreen';
import Dialog from 'react-native-dialog';
import {District} from './Components/Districts';
import Mandals from './Components/Mandals';
import {Filters} from './Components/Filters';

export const Header = props => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const {district, setDistrict, mandal, setMandal, filter, setFilter} = props;
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}> Covid-19 Helpdesk</Text>
      <TouchableOpacity
        onPress={() => {
          setVisibleDialog(!visibleDialog);
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
            padding: 7,
            borderRadius: 4,
          }}>
          Filters
        </Text>
      </TouchableOpacity>
      <Dialog.Container visible={visibleDialog}>
        <Dialog.Title>Filters</Dialog.Title>
        <Dialog.Description>
          <District
            district={district}
            setDistrict={setDistrict}
            setMandal={setMandal}
          />
          <Mandals district={district} mandal={mandal} setMandal={setMandal} />
          <Filters setFilter={setFilter} filter={filter} />
        </Dialog.Description>
        <Dialog.Button
          label="Apply Filters"
          onPress={() => {
            setVisibleDialog(!visibleDialog);
          }}
        />
      </Dialog.Container>
    </View>
  );
};

export const Card = props => {
  const {hospital} = props;
  const [show, setShow] = useState(false);
  const [mandal, setMandal] = useState('');
  const [district, setDistrict] = useState('GHMC');
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [hospitals, setHospitals] = useState([]);
  const [found, setFound] = useState(false);

  const cardPress = () => {
    setShow(!show);
  };
  return (
    <TouchableOpacity onPress={cardPress}>
      <View style={styles.card} key={hospital.email}>
        <Text style={styles.hospitalName}>{hospital.name}</Text>
        <View style={styles.hospitalAreaCont}>
          <Text style={styles.hospitalMandal}>Mandal: {hospital.mandal}</Text>
          <Text>District : {hospital.district}</Text>
        </View>
        {show ? <Text>True</Text> : <Text>False</Text>}
      </View>
    </TouchableOpacity>
  );
};

export const App = props => {
  const [district, setDistrict] = useState('GHMC');
  const [mandal, setMandal] = useState('');
  const [filter, setFilter] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const [hospitals, setHospitals] = useState([]);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // useEffect(() => {
  //   firestore()
  //     .collection('hospitals')
  //     .where('district', '==', district)
  //     .onSnapshot(snapshot => {
  //       setHospitals([]);
  //       snapshot.forEach(snap => {
  //         setHospitals(prevState => [...prevState, snap.data()]);
  //       });
  //     });
  // }, []);

  // useEffect(() => {
  //   setHospitals([]);
  //   if (mandal === '' && district !== '') {
  //     if (filter.length === 0) {
  //       firestore()
  //         .collection('hospitals')
  //         .where('district', '==', district)
  //         // .orderBy('timestamp', 'desc')
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null || undefined)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'covaxin') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('district', '==', district)
  //         .where('covaxin', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'covishield') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('district', '==', district)
  //         .where('covishield', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'remedesivir') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('district', '==', district)
  //         .where('remedesivir', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'beds') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('district', '==', district)
  //         .where('beds.available', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'ventilators') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('district', '==', district)
  //         .where('ventilators', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'oxygen') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('district', '==', district)
  //         .where('oxygen.Available', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'vaccinations') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('district', '==', district)
  //         .where('isVaccinationCenter', '==', true)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'private') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('district', '==', district)
  //         .where('isPrivate', '==', true)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'govt') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('district', '==', district)
  //         .where('isPrivate', '==', false)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     }
  //   } else if (mandal !== '') {
  //     if (filter.length === 0) {
  //       firestore()
  //         .collection('hospitals')
  //         .where('mandal', '==', mandal)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'covaxin') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('mandal', '==', mandal)
  //         .where('covaxin', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     }
  //     if (filter === 'covishield') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('mandal', '==', mandal)
  //         .where('covishield', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'remedesivir') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('mandal', '==', mandal)
  //         .where('remedesivir', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'beds') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('mandal', '==', mandal)
  //         .where('beds.available', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'ventilators') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('mandal', '==', mandal)
  //         .where('ventilators', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'vaccinations') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('mandal', '==', mandal)
  //         .where('isVaccinationCenter', '==', true)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'oxygen') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('mandal', '==', mandal)
  //         .where('oxygen.Available', '>', 0)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'private') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('mandal', '==', mandal)
  //         .where('isPrivate', '==', true)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     } else if (filter === 'govt') {
  //       firestore()
  //         .collection('hospitals')
  //         .where('mandal', '==', mandal)
  //         .where('isPrivate', '==', false)
  //         .onSnapshot(docs => {
  //           setHospitals([]);
  //           if (docs !== null)
  //             docs.forEach(doc => {
  //               setHospitals(oldArr => [...oldArr, doc.data()]);
  //             });
  //         });
  //     }
  //   }
  // }, [district, mandal, filter]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor="#0b61b7" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header
          district={district}
          setDistrict={setDistrict}
          mandal={mandal}
          setMandal={setMandal}
          filter={filter}
          setFilter={setFilter}
        /> */}
        {district ? <Text>{district}</Text> : null}
        {mandal ? <Text>{mandal}</Text> : null}
        {filter ? <Text>{filter}</Text> : null}
        {/* {hospitals.length > 0
          ? hospitals.map(hospital => (
              <Card key={hospital.email} hospital={hospital} />
            ))
          : null} */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  hospitalMandal: {marginRight: 40},
  hospitalAreaCont: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hosptalBedsCont: {},
  hospitalVaccineCont: {},
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
