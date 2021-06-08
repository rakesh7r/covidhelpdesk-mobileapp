import React from 'react';
import {Picker, Text, View} from 'react-native';
export const Filters = props => {
  const {filter, setFilter} = props;
  return (
    <View>
      <Picker
        selectedValue={filter}
        label="Filter"
        style={{height: 50, width: 280}}
        onValueChange={(itemValue, itemIndex) => {
          setFilter(itemValue);
        }}>
        <Picker.item value="" label="None" />
        <Picker.item value="beds" label="Beds" />
        <Picker.item value="oxygen" label="Oxygen" />
        <Picker.item value="ventilators" label="ventilators" />
        <Picker.item value="vaccinations" label="Vaccination Center" />
        <Picker.item value="private" label="Private Hospitals" />
        <Picker.item value="govt" label="Government Hospitals" />
        <Picker.item value="covaxin" label="Covaxin" />
        <Picker.item value="covishield" label="Covishield" />
        <Picker.item value="remedesivir" label="Remedesivir" />
      </Picker>
    </View>
  );
};
