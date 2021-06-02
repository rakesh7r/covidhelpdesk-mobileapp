import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
// import firestore from '@react-native-firebase/firestore';

const GetFire = () => {
  const [hospitals, setHospitals] = useState([]);
  const [district, setDistrict] = useState('GHMC');
  // useEffect(() => {
  //   setHospitals([]);
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
  return (
    <View>
      <Text>Fire Comp</Text>
      <Text> {district}</Text>
      {/* {hospitals.length > 0
        ? hospitals.forEach(hospital => {
            return <Text>{hospital.name}</Text>;
          })
        : null} */}
    </View>
  );
};

export default GetFire;
