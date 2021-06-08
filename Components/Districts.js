import React from 'react';
import {Picker, View} from 'react-native';
export const District = props => {
  const {district, setDistrict, setMandal} = props;
  return (
    <View>
      <Picker
        selectedValue={district}
        label="District"
        style={{height: 50, width: 280}}
        onValueChange={(itemValue, itemIndex) => {
          setMandal('');
          setDistrict(itemValue);
        }}>
        <Picker.item value="GHMC" label="Hyderabad " />
        <Picker.item value="Adilabad" label="Adilabad " />
        <Picker.item
          value="Bhadradri Kothagudem"
          label="
              Bhadradri Kothagudem
             "
        />
        <Picker.item value="Jagital" label="Jagital " />
        <Picker.item value="Jangaon" label="Jangaon " />
        <Picker.item
          value="Jayashankar Bhupalapally"
          label="
              Jayashankar Bhupalapally
             "
        />
        <Picker.item value="Jogulamba Gadwal" label="Jogulamba Gadwal " />
        <Picker.item value="Kamareddy" label="Kamareddy " />
        <Picker.item
          value="Komaram Bheem Asifabad"
          label="Komaram Bheem Asifabad"
        />
        <Picker.item value="Karimnagar" label="Karimnagar " />
        <Picker.item value="Khammam" label="Khammam " />
        <Picker.item value="Mahbubabad" label="Mahbubabad " />
        <Picker.item value="Mancherial" label="Mancherial " />
        <Picker.item value="Mahbubnagar" label="Mahbubnagar " />
        <Picker.item value="Medak" label="Medak " />
        <Picker.item value="Medchal" label="Medchal " />
        <Picker.item value="Mulugu" label="Mulugu " />
        <Picker.item value="Nagarkurnool" label="Nagarkurnool " />
        <Picker.item value="Nalgonda" label="Nalgonda " />
        <Picker.item value="Narayanpet" label="Narayanpet " />
        <Picker.item value="Nirmal" label="Nirmal " />
        <Picker.item value="Nizamabad" label="Nizamabad " />
        <Picker.item value="Pedapally" label="Pedapally " />
        <Picker.item value="Rangareddy" label="Rangareddy " />
        <Picker.item value="Sangareddy" label="Sangareddy " />
        <Picker.item value="Siddipet" label="Siddipet " />
        <Picker.item value="Suryapet" label="Suryapet " />
        <Picker.item value="Rajanna Sircilla" label="Rajanna Sircilla " />
        <Picker.item value="Vikarabad" label="Vikarabad " />
        <Picker.item value="Wanaparthy" label="Wanaparthy " />
        <Picker.item value="Warangal Rural" label="Warangal Rural " />
        <Picker.item value="Yadadri Bhuvanagiri" label="Yadadri Bhuvanagiri " />
        <Picker.item value="Warangal Urban" label="Warangal Urban " />
      </Picker>
    </View>
  );
};
