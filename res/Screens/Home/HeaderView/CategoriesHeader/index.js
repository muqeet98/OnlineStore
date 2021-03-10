// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import React, { useEffect, useState } from 'react';
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import styles from "./styles";
const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
      
    <View style={{marginTop: 10}}>
      {/*Header of the Expandable List Item*/}
      <View style={styles.headercontainer}>
      
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
         <View>
         <Image source={{uri: item.picture}} style={styles.itemImage} /> 
         </View>
         <View style={{paddingLeft: 25,}}>
            <View>
                <Text style={styles.text1}>{item.category_name}</Text>
            </View>
            <View>
                <Text>{item.name}</Text>
            </View>
         </View>
      
      </TouchableOpacity>
      </View>
      <View
        style={{
          flex:1,
          backgroundColor:'white',
          flexDirection:'row',
          flexWrap: 'wrap',
          height: layoutHeight,
          overflow: 'hidden',
        }}>
            
        {/*Content under the header of the Expandable List Item*/}

        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            onPress={() => alert('Id: ' + item.id + ' val: ' + item.val)}>
      
              <Image source={{uri: item.pic}} style={styles.itemImageSubC} />
            <Text style={styles.text}>
               {item.val}
            </Text>
            <View style={styles.separator} />
          </TouchableOpacity>
          
        ))}
      </View>
    </View>
  );
};

const index = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false)
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <View style={{ flexDirection: 'row', padding: 10 }}>
          <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              {multiSelect
                ? 'Enable Single \n Expand'
                : 'Enalble Multiple \n Expand'}
            </Text>
          </TouchableOpacity>
        </View> */}
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default index;

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Vegitables',
    picture: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/How-to-boil-rice-square-FS-6126-500x500.jpg',
    name: 'muqeet',
    subcategory: [
      { id: 1, val: 'Sub Cat 1', pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
      { id: 3, val: 'Sub Cat 3', pic: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png' },
      { id: 4, val: 'Sub Cat 4' , pic:'https://homepages.cae.wisc.edu/~ece533/images/boat.png'},
      { id: 5, val: 'Sub Cat 5' , pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'}, 
    ],
  },
  {
    isExpanded: false,
    category_name: 'Groceries',
    picture: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12620282-0-M.jpg?5',
    name: 'zia',
    subcategory: [
      { id: 6, val: 'Sub Cat 4' , pic:'https://homepages.cae.wisc.edu/~ece533/images/boat.png'},
      { id: 7, val: 'Sub Cat 5' , pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'}, 
      { id: 8, val: 'Sub Cat 1', pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
      { id: 9, val: 'Sub Cat 3', pic: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png' },
      { id: 10, val: 'Sub Cat 1', pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
      { id: 11, val: 'Sub Cat 3', pic: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png' },
      { id: 12, val: 'Sub Cat 1', pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Personal Care',
    name: 'umer',
    picture: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12620282-0-M.jpg?5',
    subcategory: [
      { id: 13, val: 'Sub Cat 7',  pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
      { id: 14, val: 'Sub Cat 9', pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
      { id: 15, val: 'Sub Cat 1', pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
      { id: 16, val: 'Sub Cat 3', pic: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png' },
    ],
  },

];
