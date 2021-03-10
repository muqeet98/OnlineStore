// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet , TouchableOpacity,TextInput, FlatList,Image, ToastAndroid, Alert} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
// import Atta from "../../constants";
const index = ({navigation}) => {
console.log("HA B",navigation);
    // const [dataD]= React.useState(data);
//  console.log(JSON.stringify(CONTENT));
    const itemlist= (item) => {
        return(
            <View>
                <TouchableOpacity onPress={()=> navigation.navigate("SubCategories",{data: item.item.subcategory, navigation: navigation})}>
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

const Products = [
  {
		p_id: 3,
		price: '60',
		name: 'Mango',
		pic: 'https://pbs.twimg.com/profile_images/702112096109121536/xAPaPWiM_400x400.jpg'
	},
	{
		p_id: 4,
		price: '15',
		name: 'Water Melon',
		pic: 'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImFlYzQ2ZGM5M2M4YTQ0ZjJiYzJhNzJlYWFhODFkNDViIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=26e27c50dfa812c22691019c13fe9c0ee2d75883ed72c1b29d3ca63d5dba7ab9'
	},
	{
		p_id: '1',
		price: '15',
		name: 'Banana',
		pic: 'https://ui.assets-asda.com/dm/asdagroceries/0000000005227_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=fqaSJ3&fmt=jpg&fit=constrain,1&wid=256&hei=256'
	},

	{
		p_id: 2,
		price: '40',
		name: 'Apple',
		pic:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3sjd94Mtn8tJ3elJNM-1b6HPiux11PXnsg&usqp=CAU'
	},


];


const Products2 = [
	{
		p_id: '1',
		price: '15',
		name: 'Palak ',
		pic: 'https://cdn.mydukaan.io/v1/image/256x256/70641/d8d7f537-6777-46e3-89b4-fbdc58b79489.png'
	},

	{
		p_id: 2,
		price: '40',
		name: 'Methi',
		pic: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12620282-0-M.jpg?5'
	},

];

const Atta = [
	{
		p_id: 1,
		price: '250',
		name: 'Chakki Atta ',
		pic: 'https://cdn.mydukaan.io/v1/image/256x256/70641/d8d7f537-6777-46e3-89b4-fbdc58b79489.png'
	},

	{
		p_id: 3,
		price: '40',
		name: '',
		pic: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12620282-0-M.jpg?5'
	},
    	{
		p_id: 4,
		price: '40',
		name: 'Maida',
		pic: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12620282-0-M.jpg?5'
	},

];


const CONTENT = [
    {
      isExpanded: false,
      category_name: 'Vegitables',
      picture: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
      name: 'muqeet',
      subcategory: [
        { id: 1, val: 'Fruits', pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png', products: Products },
          { id: 3, val: 'Leaf vegitable', pic: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png' , products: Products2},
        { id: 4, val: 'Salad' , pic:'https://homepages.cae.wisc.edu/~ece533/images/boat.png' , products: Products},
        { id: 5, val: 'Sub Cat 5 floor and meet' , pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' , products: Products},               
      ],
    },
    {
      isExpanded: false,
      category_name: 'Groceries',
      picture: 'https://i.ndtvimg.com/i/2016-02/grocery-625_625x350_51455788506.jpg',
      name: 'zia',
      subcategory: [
        { id: 6, val: 'Atta & Flour' , pic:'https://qne.com.pk/assets/images/products/product_images/detail_img/8344_detail_img.jpg' , products: Atta},
        // { id: 7, val: 'Pulses' , pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'}, 
        // { id: 8, val: 'Rice', pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
        // { id: 9, val: 'Ghee', pic: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png' },
        // { id: 10, val: 'Milk & Milk Products', pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' },
        // { id: 11, val: 'Organic Staples', pic: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png' },
        
      ],
    },
    {
      isExpanded: false,
      category_name: 'Personal Care',
      name: 'umer',
      picture: 'https://www.tazaonline.com/wp-content/uploads/2019/03/Skin-care-300x300.jpg',
      subcategory: [
        { id: 13, val: 'Sub Cat 7',  pic: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png' ,  },
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