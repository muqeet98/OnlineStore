// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet , TouchableOpacity,TextInput, FlatList,Image} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
const data = [
   {
       id: "1",
       price: '15',
       name: 'Salimbasmati faislabadi rice ',
       pic:'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/How-to-boil-rice-square-FS-6126-500x500.jpg'
   },

   {
    id: 2,
    price: '40',
    name: 'floor',
    pic: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12620282-0-M.jpg?5'
},

{
    id: 3,
    price: '60',
    name: 'tea',
    pic: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/How-to-boil-rice-square-FS-6126-500x500.jpg'
},
{
    id: 4,
    price: '15',
    name: 'rice',
    pic: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/How-to-boil-rice-square-FS-6126-500x500.jpg'
},
]

const index = ({navigation}) => {

    const [dataD]= React.useState(data);

    const itemlist= (item) => {
        console.log("hai",navigation);
        return(
            <View>
                <TouchableOpacity>
            <View style={styles.itemContainer}>
                <View style={{borderColor:'#ec6805', borderWidth: 1,borderRadius: 20}}>
                    <Image source={{uri: item.item.picture}} style={styles.ImageView}/>   
                </View>
                 <View >
                 <Text style={styles.text2}>{item.item.category_name}</Text>
                 </View>
            </View>
            </TouchableOpacity>
            </View>
        )
    }

    const seperator =()=> {
        return(
            <View style={{marginLeft:15}}>
      
            </View>
        )
    }

  return (
      
    <View style={styles.MainContainer}>
        <View style={styles.listHeadercontainer}>
           <View>
              <Text style={styles.text1} >Shop By Category</Text>
           </View>
          
       
        </View>
        <View>
        <FlatList 
        data={CONTENT}
        renderItem={ itemlist}
        numColumns={3}
         showsHorizontalScrollIndicator={false}
         ItemSeparatorComponent={seperator}
        />
        
       </View>
    </View>
  );
};


export default index;



const CONTENT = [
    {
      isExpanded: false,
      category_name: 'Vegitables',
      picture: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
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
      picture: 'https://www.tazaonline.com/wp-content/uploads/2019/03/Skin-care-300x300.jpg',
      subcategory: [
        { id: 13, val: 'Sub Cat 7',  pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
        { id: 14, val: 'Sub Cat 9', pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
        { id: 15, val: 'Sub Cat 1', pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
        { id: 16, val: 'Sub Cat 3', pic: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png' },
      ],
    },
    {
      isExpanded: false,
      category_name: 'Household Items',
      picture: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/How-to-boil-rice-square-FS-6126-500x500.jpg',
      name: 'umer',
      subcategory: [
        { id: 17, val: 'Sub Cat 10',  pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
        { id: 18, val: 'Sub Cat 2',  pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
      ],
    },
  
    {
      isExpanded: false,
      category_name: 'Beverages',
      picture: 'https://www.imtiazsupermarket.com.pk/wp-content/uploads/2019/09/1.jpg',
      name: 'Abid',
      subcategory: [
        { id: 19, val: 'Sub Cat 13',  pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
        { id: 20, val: 'Sub Cat 5',  pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
      ],
    },
  //   {
  //     isExpanded: false,
  //     category_name: 'Item 6',
  //     subcategory: [
  //       { id: 17, val: 'Sub Cat 17' },
  //       { id: 18, val: 'Sub Cat 8' },
  //     ],
  //   },
  //   {
  //     isExpanded: false,
  //     category_name: 'Item 7',
  //     subcategory: [{ id: 20, val: 'Sub Cat 20' }],
  //   },
  //   {
  //     isExpanded: false,
  //     category_name: 'Item 8',
  //     subcategory: [{ id: 22, val: 'Sub Cat 22' }],
  //   },
  //   {
  //     isExpanded: false,
  //     category_name: 'Item 9',
  //     subcategory: [
  //       { id: 26, val: 'Sub Cat 26' },
  //       { id: 27, val: 'Sub Cat 7' },
  //     ],
  //   },
  //   {
  //     isExpanded: false,
  //     category_name: 'Item 10',
  //     subcategory: [
  //       { id: 28, val: 'Sub Cat 28' },
  //       { id: 30, val: 'Sub Cat 0' },
  //     ],
  //   },
  //   {
  //     isExpanded: false,
  //     category_name: 'Item 11',
  //     subcategory: [{ id: 31, val: 'Sub Cat 31' }],
  //   },
  //   {
  //     isExpanded: false,
  //     category_name: 'Item 12',
  //     subcategory: [{ id: 34, val: 'Sub Cat 34' }],
  //   },
  //   {
  //     isExpanded: false,
  //     category_name: 'Item 13',
  //     subcategory: [
  //       { id: 38, val: 'Sub Cat 38' },
  //       { id: 39, val: 'Sub Cat 9' },
  //     ],
  //   },
  //   {
  //     isExpanded: false,
  //     category_name: 'Item 14',
  //     subcategory: [
  //       { id: 40, val: 'Sub Cat 40' },
  //       { id: 42, val: 'Sub Cat 2' },
  //     ],
  //   },
  //   {
  //     isExpanded: false,
  //     category_name: 'Item 15',
  //     subcategory: [
  //       { id: 43, val: 'Sub Cat 43' },
  //       { id: 44, val: 'Sub Cat 44' },
  //     ],
  //   },
  ];