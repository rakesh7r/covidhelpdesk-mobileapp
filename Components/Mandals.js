import React from 'react';
import {Picker, View} from 'react-native';

const Mandals = props => {
  const {district, mandal, setMandal} = props;

  return (
    <View>
      {district === 'GHMC' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Amberpet" label="Amberpet" />
          <Picker.item value="Asif Nagar" label="Asif Nagar" />
          <Picker.item value="Bahadurpura" label="Bahadurpura" />
          <Picker.item value="Bandlaguda" label="Bandlaguda" />
          <Picker.item value="Charminar" label="Charminar" />
          <Picker.item value="Golkonda" label="Golkonda" />
          <Picker.item value="Himayathnagar" label="Himayathnagar" />
          <Picker.item value="Nampally" label="Nampally" />
          <Picker.item value="Saidabad" label="Saidabad " />
          <Picker.item value="Ameerpet" label="Ameerpet" />
          <Picker.item value="Khairtabad" label="Khairtabad" />
          <Picker.item value="Marredpally" label="Marredpally" />
          <Picker.item value="Musheerabad" label="Musheerabad" />
          <Picker.item value="Secunderabad" label="Secunderabad" />
          <Picker.item value="Shaikpet" label="Shaikpet" />
          <Picker.item value="Trimulgherry" label="Trimulgherry" />
        </Picker>
      ) : null}
      {district === 'Adilabad' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Adilabad urban" label="Adilabad (urban)" />
          <Picker.item value="Adilabad rural" label="Adilabad (rural)" />
          <Picker.item value="Mavala" label="Mavala" />
          <Picker.item value="Gudihatnoor" label="Gudihatnoor" />
          <Picker.item value="Bajahatnoor" label="Bajahatnoor" />
          <Picker.item value="Bela" label="Bela" />
          <Picker.item value="Boadh" label="Boadh" />
          <Picker.item value="Jainath" label="Jainath" />
          <Picker.item value="Indervelly" label="Indervelly" />
          <Picker.item value="Narnoor" label="Narnoor" />
          <Picker.item value="Gudiguda" label="Gudiguda" />
          <Picker.item value="Utnoor" label="Utnoor" />
        </Picker>
      ) : null}
      {district === 'Bhadradri Kothagudem' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Kothagudem" label="Kothagudem" />
          <Picker.item value="Palwancha" label="Palwancha" />
          <Picker.item value="Tekulapalli" label="Tekulapalli" />
          <Picker.item value="Yellandu" label="Yellandu" />
          <Picker.item value="Chandrugonda" label="Chandrugonda" />
          <Picker.item value="Aswaraopeta" label="Aswaraopeta" />
          <Picker.item value="Mulakalapalli" label="Mulakalapalli" />
          <Picker.item value="Dammapeta" label="Dammapeta" />
          <Picker.item value="Gundala" label="Gundala" />
          <Picker.item value="Julurpadu" label="Julurpadu" />
          <Picker.item value="Sujathanagar" label="Sujathanagar" />
          <Picker.item value="Chunchupalle" label="Chunchupalle" />
          <Picker.item value="Laxmidevipalli" label="Laxmidevipalli" />
          <Picker.item value="Allapalli" label="Allapalli" />
          <Picker.item value="Annapureddypalli" label="Annapureddypalli " />
          <Picker.item value="Bhadrachalam" label="Bhadrachalam" />
          <Picker.item value="Dummugudem" label="Dummugudem" />
          <Picker.item value="Cherla" label="Cherla" />
          <Picker.item value="Burgampahad" label="Burgampahad" />
          <Picker.item value="Aswapuram" label="Aswapuram" />
          <Picker.item value="Manuguru" label="Manuguru" />
          <Picker.item value="Pinapaka" label="Pinapaka" />
          <Picker.item value="Karakagudem" label="Karakagudem" />
        </Picker>
      ) : null}
      {district === 'Jayashankar Bhupalapally' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Bhupalpalle" label="Bhupalpalle" />
          <Picker.item value="Chityal" label="Chityal" />
          <Picker.item value="Ghanpur" label="Ghanpur" />
          <Picker.item value="Kataram" label="Kataram" />
          <Picker.item value="Mahadevpur" label="Mahadevpur" />
          <Picker.item value="Maha" label="Maha Mutharam" />
          <Picker.item value="Malharrao" label="Malharrao" />
          <Picker.item value="Mogullapalle" label="Mogullapalle" />
          <Picker.item value="Palimela" label="Palimela" />
          <Picker.item value="Regonda" label="Regonda" />
          <Picker.item value="Tekumatla" label="Tekumatla" />
          <Picker.item value="mulugu" label="Mulugu revenue division " />
          <Picker.item value="Eturunagaram" label="Eturunagaram" />
          <Picker.item value="Govindaraopet" label="Govindaraopet" />
          <Picker.item value="Mangapet" label="Mangapet" />
          <Picker.item value="Mulug" label="Mulug" />
          <Picker.item value="Tadvai" label="Tadvai" />
          <Picker.item value="Vajedu" label="Vajedu" />
          <Picker.item value="Venkatapur" label="Venkatapur" />
          <Picker.item value="Kannaigudem" label="Kannaigudem" />
        </Picker>
      ) : null}
      {district === 'Jogulamba Gadwal' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Jagital' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Jagitial urban" label="Jagitial(urban)" />
          <Picker.item value="Jagitial rural" label="Jagitial(rural)" />
          <Picker.item value="Raikal" label="Raikal" />
          <Picker.item value="Sarangapur" label="Sarangapur" />
          <Picker.item value="Beerpur" label="Beerpur" />
          <Picker.item value="Dharmapuri" label="Dharmapuri" />
          <Picker.item value="Buggaram" label="Buggaram" />
          <Picker.item value="Pegadapalli" label="Pegadapalli" />
          <Picker.item value="Gollapalli" label="Gollapalli" />
          <Picker.item value="Mallial" label="Mallial" />
          <Picker.item value="Kodimial" label="Kodimial" />
          <Picker.item value="Velgatur" label="Velgatur " />
          <Picker.item value="Korutla" label="Korutla" />
          <Picker.item value="Metpalli" label="Metpalli" />
          <Picker.item value="Mallapur" label="Mallapur" />
          <Picker.item value="Ibrahimpatnam" label="Ibrahimpatnam" />
          <Picker.item value="Medipalli" label="Medipalli" />
          <Picker.item value="Kathlapur" label="Kathlapur" />
        </Picker>
      ) : null}
      {district === 'Jangaon' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Bachannapeta" label="Bachannapeta" />
          <Picker.item value="Devaruppala" label="Devaruppala" />
          <Picker.item value="Gundala" label="Gundala" />
          <Picker.item value="Jangaon" label="Jangaon" />
          <Picker.item value="Lingalaghanpur" label="Lingalaghanpur" />
          <Picker.item value="Narmetta" label="Narmetta" />
          <Picker.item value="Raghunathapalle" label="Raghunathapalle" />
          <Picker.item value="Tarigoppula" label="Tarigoppula " />
          <Picker.item value="Chilpur" label="Chilpur" />
          <Picker.item value="Zaffergadh" label="Zaffergadh" />
          <Picker.item value="Kodakandla" label="Kodakandla" />
          <Picker.item value="Palakurthi" label="Palakurthi" />
          <Picker.item value="Station" label="Station Ghanpur" />
        </Picker>
      ) : null}
      {district === 'Kamareddy' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Karimnagar' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Khammam' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Komaram Bheem Asifabad' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Mahbubabad' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Mancherial' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Chennur" label="Chennur" />
          <Picker.item value="Jaipur" label="Jaipur" />
          <Picker.item value="Bheemaram" label="Bheemaram" />
          <Picker.item value="Kotapally" label="Kotapally" />
          <Picker.item value="Luxettipet" label="Luxettipet" />
          <Picker.item value="Mancherial" label="Mancherial" />
          <Picker.item value="Naspur" label="Naspur" />
          <Picker.item value="Hajipur" label="Hajipur" />
          <Picker.item value="Mandamarri" label="Mandamarri" />
          <Picker.item value="Dandepally" label="Dandepally" />
          <Picker.item value="Jannaram" label="Jannaram " />
          <Picker.item value="Kasipet" label="Kasipet" />
          <Picker.item value="Bellampally" label="Bellampally Mandal" />
          <Picker.item value="Vempally" label="Vempally" />
          <Picker.item value="Nennel" label="Nennel" />
          <Picker.item value="Tandur" label="Tandur" />
          <Picker.item value="Bheemini" label="Bheemini" />
          <Picker.item value="Kannepally" label="Kannepally" />
        </Picker>
      ) : null}
      {district === 'Mahbubnagar' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Medak' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Medchal' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Alwal" label="Alwal" />
          <Picker.item value="Bachupally" label="Bachupally" />
          <Picker.item value="Balanagar" label="Balanagar" />
          <Picker.item value="Dundigal" label="Dundigal" />
          <Picker.item value="Kukatpally" label="Kukatpally" />
          <Picker.item value="Malkajgiri" label="Malkajgiri" />
          <Picker.item value="Quthbullapur" label="Quthbullapur" />
          <Picker.item value="Ghatkesar" label="Ghatkesar" />
          <Picker.item value="Kapra" label="Kapra" />
          <Picker.item value="Keesara" label="Keesara" />
          <Picker.item value="Medchal" label="Medchal" />
          <Picker.item value="Medipally" label="Medipally" />
          <Picker.item value="Shamirpet" label="Shamirpet" />
          <Picker.item value="Uppal" label="Uppal" />
        </Picker>
      ) : null}
      {district === 'Mulugu' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Nagarkurnool' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Nalgonda' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Narayanpet' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Nirmal' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Nizamabad' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Pedapally' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Rangareddy' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Sangareddy' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Kalher" label="Kalher" />
          <Picker.item value="Kangti" label="Kangti" />
          <Picker.item value="Manoor" label="Manoor" />
          <Picker.item value="Nagilgidda" label="Nagilgidda" />
          <Picker.item value="Narayankhed" label="Narayankhed" />
          <Picker.item value="Sirgapoor" label="Sirgapoor" />
          <Picker.item value="Ameenpur" label="Ameenpur" />
          <Picker.item value="Andole" label="Andole" />
          <Picker.item value="Gummadidala" label="Gummadidala" />
          <Picker.item value="Hathnoora" label="Hathnoora" />
          <Picker.item value="Jinnaram" label="Jinnaram" />
          <Picker.item value="Kandi" label="Kandi" />
          <Picker.item value="Kondapur" label="Kondapur" />
          <Picker.item value="Munipally" label="Munipally" />
          <Picker.item value="Patancheru" label="Patancheru" />
          <Picker.item value="Pulkal" label="Pulkal" />
          <Picker.item value="Ramchandrapuram" label="Ramchandrapuram" />
          <Picker.item value="Sadasivpet" label="Sadasivpet" />
          <Picker.item value="Sangareddy" label="Sangareddy" />
          <Picker.item value="Vatpally" label="Vatpally" />
          <Picker.item value="Jharasangam" label="Jharasangam" />
          <Picker.item value="Kohir" label="Kohir" />
          <Picker.item value="Mogudampally" label="Mogudampally" />
          <Picker.item value="Nyalkal" label="Nyalkal" />
          <Picker.item value="Raikode" label="Raikode" />
          <Picker.item value="Zaheerabad" label="Zaheerabad" />
        </Picker>
      ) : null}
      {district === 'Siddipet' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Siddipet urban" label="Siddipet(Urban)" />
          <Picker.item value="Siddipet rural" label="Siddipet (Rural)" />
          <Picker.item value="Nangnoor" label="Nangnoor" />
          <Picker.item value="Chinnakodur" label="Chinnakodur" />
          <Picker.item value="Thoguta" label="Thoguta" />
          <Picker.item value="Doultabad" label="Doultabad" />
          <Picker.item value="Mirdoddi" label="Mirdoddi" />
          <Picker.item value="Dubbak" label="Dubbak" />
          <Picker.item value="Cherial" label="Cherial" />
          <Picker.item value="Komuravelli" label="Komuravelli " />
          <Picker.item value="Gajwel" label="Gajwel" />
          <Picker.item value="Jagdevpur" label="Jagdevpur" />
          <Picker.item value="Kondapak" label="Kondapak" />
          <Picker.item value="Mulug" label="Mulug" />
          <Picker.item value="Markook" label="Markook" />
          <Picker.item value="Wargal" label="Wargal" />
          <Picker.item value="Raipole" label="Raipole " />
          <Picker.item value="Husnabad" label="Husnabad" />
          <Picker.item value="Akkannapet" label="Akkannapet" />
          <Picker.item value="Koheda" label="Koheda" />
          <Picker.item value="Bejjanki" label="Bejjanki" />
          <Picker.item value="Maddur" label="Maddur" />
        </Picker>
      ) : null}
      {district === 'Suryapet' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Atmakur(s)" label="Atmakur(s)" />
          <Picker.item value="Chivvemla" label="Chivvemla" />
          <Picker.item value="Jajireddygudem" label="Jajireddygudem" />
          <Picker.item value="Mothey" label="Mothey" />
          <Picker.item value="Nuthankal" label="Nuthankal" />
          <Picker.item value="Penpahad" label="Penpahad" />
          <Picker.item value="Suryapet" label="Suryapet" />
          <Picker.item value="Thirumalagiri" label="Thirumalagiri" />
          <Picker.item value="Thungathurthy" label="Thungathurthy" />
          <Picker.item value="Garidepally" label="Garidepally" />
          <Picker.item value="Neredcherla" label="Neredcherla" />
          <Picker.item value="Nagaram" label="Nagaram" />
          <Picker.item value="Maddirala" label="Maddirala" />
          <Picker.item value="Palakeedu" label="Palakeedu" />
          <Picker.item value="Chilkur" label="Chilkur" />
          <Picker.item value="Huzurnagar" label="Huzurnagar" />
          <Picker.item value="Kodad" label="Kodad" />
          <Picker.item value="Mattampally" label="Mattampally" />
          <Picker.item value="Mellachervu" label="Mellachervu" />
          <Picker.item value="Munagala" label="Munagala" />
          <Picker.item value="Nadigudem" label="Nadigudem" />
          <Picker.item value="Ananthagiri" label="Ananthagiri" />
          <Picker.item value="Mallareddygudem" label="Mallareddygudem" />
        </Picker>
      ) : null}
      {district === 'Rajanna Sircilla' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Vikarabad' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Basheerabad" label="Basheerabad" />
          <Picker.item value="Bommaraspet" label="Bommaraspet" />
          <Picker.item value="Doulthabad" label="Doulthabad" />
          <Picker.item value="Kodangal" label="Kodangal" />
          <Picker.item value="Peddemul" label="Peddemul" />
          <Picker.item value="Tandur" label="Tandur" />
          <Picker.item value="Yelal" label="Yelal" />
          <Picker.item value="Doma" label="Doma" />
          <Picker.item value="Dharur" label="Dharur" />
          <Picker.item value="Bantwaram" label="Bantwaram" />
          <Picker.item value="Kulkacherla" label="Kulkacherla" />
          <Picker.item value="Kotepally" label="Kotepally" />
          <Picker.item value="Marpalle" label="Marpalle" />
          <Picker.item value="Mominpet" label="Mominpet" />
          <Picker.item value="Nawabpet" label="Nawabpet" />
          <Picker.item value="Pudur" label="Pudur" />
          <Picker.item value="Pargi" label="Pargi" />
          <Picker.item value="Vikarabad" label="Vikarabad" />
        </Picker>
      ) : null}
      {district === 'Wanaparthy' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
        </Picker>
      ) : null}
      {district === 'Warangal Rural' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Atmakur" label="Atmakur" />
          <Picker.item value="Damera" label="Damera" />
          <Picker.item value="Geesugonda" label="Geesugonda" />
          <Picker.item value="Parkal" label="Parkal" />
          <Picker.item value="Parvathagiri" label="Parvathagiri" />
          <Picker.item value="Rayaparthy" label="Rayaparthy" />
          <Picker.item value="Sangem" label="Sangem" />
          <Picker.item value="Shayampet" label="Shayampet" />
          <Picker.item value="Wardhannapet" label="Wardhannapet" />
          <Picker.item value="Chennaraopet" label="Chennaraopet" />
          <Picker.item value="Duggondi" label="Duggondi" />
          <Picker.item value="Khanapur" label="Khanapur" />
          <Picker.item value="Narsampet" label="Narsampet" />
          <Picker.item value="Nallabelly" label="Nallabelly" />
          <Picker.item value="Nekkonda" label="Nekkonda" />
        </Picker>
      ) : null}

      {district === 'Warangal Urban' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Bheemadevarpalli" label="Bheemadevarpalli" />
          <Picker.item value="Dharmasagar" label="Dharmasagar" />
          <Picker.item value="Elkathurthy" label="Elkathurthy" />
          <Picker.item value="Inavole" label="Inavole" />
          <Picker.item value="Hanamkonda" label="Hanamkonda" />
          <Picker.item value="Hasanparthy" label="Hasanparthy" />
          <Picker.item value="Kamalapur" label="Kamalapur" />
          <Picker.item value="Kazipet" label="Kazipet" />
          <Picker.item value="Khila" label="Khila Warangal" />
          <Picker.item value="Velair" label="Velair" />
          <Picker.item value="Warangal" label="Warangal" />
        </Picker>
      ) : null}
      {district === 'Yadadri Bhuvanagiri' ? (
        <Picker
          selectedValue={mandal}
          label="Mandal"
          style={{height: 50, width: 280}}
          onValueChange={(itemValue, itemIndex) => {
            setMandal(itemValue);
          }}>
          <Picker.item value="" label="All Mandals" />
          <Picker.item value="Addaguduru" label="Addaguduru" />
          <Picker.item value="Alair" label="Alair" />
          <Picker.item value="Atmakur(m)" label="Atmakur(M)" />
          <Picker.item value="Bibinagar" label="Bibinagar" />
          <Picker.item value="Bhongir" label="Bhongir" />
          <Picker.item value="Bommalaramaram" label="Bommalaramaram" />
          <Picker.item value="Motakondur" label="Motakondur" />
          <Picker.item value="Mothkur" label="Mothkur" />
          <Picker.item value="Rajapet" label="Rajapet" />
          <Picker.item value="Turkapally" label="Turkapally" />
          <Picker.item value="Yadagirigutta" label="Yadagirigutta" />
          <Picker.item value="Bhoodan" label="Bhoodan Pochampally" />
          <Picker.item value="Choutuppal" label="Choutuppal" />
          <Picker.item value="Narayanpur" label="Narayanpur" />
          <Picker.item value="Ramannapet" label="Ramannapet" />
          <Picker.item value="Valigonda" label="Valigonda" />
        </Picker>
      ) : null}
    </View>
  );
};
export default Mandals;
