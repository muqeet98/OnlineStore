import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView,Dimensions, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
 class index extends React.Component {

 
    constructor({}){
        super();
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
              pic: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/How-to-boil-rice-square-FS-6126-500x500.jpg'
          },
          {
              title:"Item 2",
              text: "Text 2",
              pic: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12620282-0-M.jpg?5'
          },
          {
              title:"Item 3",
              text: "Text 3",
              pic: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/How-to-boil-rice-square-FS-6126-500x500.jpg'
          },
          {
              title:"Item 4",
              text: "Text 4",
              pic: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/How-to-boil-rice-square-FS-6126-500x500.jpg'
          },
          {
              title:"Item 5",
              text: "Text 5",
              pic: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12620282-0-M.jpg?5'
          },
        ]
      }
    }

    _renderItem({index,item}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              alignItems:'center' 
            //   height: 250,
            //   padding: 50,
            //   marginLeft: 25,
            //   marginRight: 25,
               }}>
              <Image source={{uri: item.pic}} style={{width: Width* 0.9, height: Height* 0.3}}/>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
            <View style={{ flex: 1, flexDirection:'row' }}>
                <Carousel
                  layout={"tinder"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={100}
                  itemWidth={Width}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

export default index;