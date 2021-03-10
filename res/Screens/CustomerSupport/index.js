// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import React, {useEffect, useState} from 'react';
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
} from 'react-native';
import styles from './styles';

const ExpandableComponent = ({item, onClickFunction}) => {
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
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <Text style={styles.headerText}>
          {item.category_name}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            onPress={
              () => alert('Id: ' + item.id + ' val: ' + item.val)
          }>
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
          ? (array[placeindex]['isExpanded'] =
             !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text style={styles.titleText}>Payment Related Quries</Text>
        </View>
        <View style={styles.separator} />
        <ScrollView>
          {listDataSource.map((item, key) => (
            <>
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
            <View style={styles.separator} />
            </>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default index;

const CONTENT = [
  {
    isExpanded: false,
    category_name: 'How can I make payment?',
    subcategory: [
      {id: 1, val: 'ata is any set of characters that is gathered and translated for some purpose, usually analysis. If data is not put into context, it doesn'},

    ],
  },
  {
    isExpanded: false,
    category_name: 'When will I get my cashback?',
    subcategory: [
      {id: 4, val: 'ata is any set of characters that is gathered and translated for some purpose, usually analysis. If data is not put into context, it doesn'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'How long do you take to intiate my refund?',
    subcategory: [
      {id: 7, val: 'In a computers storage, data is a series of bits (binary digits) that have the value one or zero. Data is processed by the CPU'},
      {id: 9, val: 'Sub Cat 9'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'What is Grofers Cash?',
    subcategory: [
      {id: 10, val: 'The word data is technically a plural noun, as in, "The data are being processed." The singular form of data is datum'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Can I top up Grofers cash',
    subcategory: [
      {id: 13, val: 'Sub Cat 13 The word data is technically a plural noun, as in, "The data are being processed." The singular form of data is datum'},
    
    ],
  },
  {
    isExpanded: false,
    category_name: 'How can i review my recipt?',
    subcategory: [
      {id: 17, val: 'Sub Cat 17 The word data is technically a plural noun, as in, "The data are being processed." The singular form of data is datum'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Item 7',
    subcategory: [{id: 20, val: 'Sub Cat 20'}],
  },
  {
    isExpanded: false,
    category_name: 'Item 8',
    subcategory: [{id: 22, val: 'Sub Cat 22'}],
  },
  {
    isExpanded: false,
    category_name: 'Item 9',
    subcategory: [
      {id: 26, val: 'Sub Cat 26'},
      {id: 27, val: 'Sub Cat 7'},
    ],
  },

  {
    isExpanded: false,
    category_name: 'Item 9',
    subcategory: [
      {id: 26, val: 'Sub Cat 26'},
     
    ],
  },
    {
    isExpanded: false,
    category_name: 'Item  10',
    subcategory: [
      {id: 27, val: 'Sub Cat 26'},

    ],
  },

];