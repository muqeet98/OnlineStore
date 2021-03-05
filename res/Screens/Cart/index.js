// ./screens/Home.js

import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  ToastAndroid,
  Dimensions,
} from 'react-native';
import {useState} from 'react/cjs/react.development';
import styles from './styles';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const index = ({navigation}) => {
  const [tip, setTip] = useState(0);

  const set0 = () => {
    setTip(0);
  };

  const setTip50 = () => {
    if (tip == 0) {
      setTip(50);
      ToastAndroid.showWithGravityAndOffset(
        'Thanks! Tip has been added',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      setTip(0);
    }
  };
  const setTip100 = () => {
    if (tip == 0) {
      setTip(100);
      ToastAndroid.showWithGravityAndOffset(
        'Thanks! Tip has been added',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      setTip(0);
    }
  };

  const setTip120 = () => {
    if (tip == 0) {
      setTip(120);
      ToastAndroid.showWithGravityAndOffset(
        'Thanks! Tip has been added',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      setTip(0);
    }
  };
  return (
    <View style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.InnerView}>
          <View style={styles.rowcontainer}>
            <View>
              <Text style={styles.text1}>MRP</Text>
            </View>
            <View>
              <Text style={styles.text1}>157</Text>
            </View>
          </View>

          <View style={styles.rowcontainer}>
            <View>
              <Text style={styles.text1}>Product Dicount</Text>
            </View>
            <View>
              <Text style={styles.text1}>-50</Text>
            </View>
          </View>

          <View style={styles.rowcontainer}>
            <View>
              <Text style={styles.text1}>Delivery Charges</Text>
            </View>
            <View>
              <Text style={styles.text1}>Free</Text>
            </View>
          </View>
          {tip != 0 ? (
            <View style={styles.rowcontainer}>
              <View>
                <Text style={styles.text1}>Tip Added</Text>
              </View>
              <View>
                <Text style={styles.text1}>{tip}</Text>
              </View>
            </View>
          ) : null}

          <View style={styles.seperatorContainerl} />

          <View style={styles.rowcontainer}>
            <View>
              <Text style={styles.text1}>Sub Total</Text>
            </View>
            <View>
              <Text style={styles.text1}>0</Text>
            </View>
          </View>
        </View>

        <View style={styles.TipContainer}>
          <View style={styles.TipRow}>
            <View>
              <Image
                source={require('../../assets/icons/delivery-man.png')}
                style={styles.deliverImage}
              />
            </View>
            <View>
              <Text style={styles.text1}>
                Add Tip to support your delivery Hero.
              </Text>
              <View style={{width: Width * 0.7}}>
                <Text style={styles.text3}>
                  Your delivery hero risks his life to deliver your grocery
                  safely in the time of crisis.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.TipButtonsContainer}>
            {tip == 50 ? (
              <View>
                <TouchableOpacity
                  style={styles.seeAllSelected}
                  onPress={setTip50}>
                  <Text style={styles.text4}>Rs 50</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity style={styles.seeAll} onPress={setTip50}>
                  <Text style={styles.text3}>Rs 50</Text>
                </TouchableOpacity>
              </View>
            )}

            {tip == 100 ? (
              <View>
                <TouchableOpacity
                  style={styles.seeAllSelected}
                  onPress={setTip100}>
                  <Text style={styles.text4}>Rs 100</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity style={styles.seeAll} onPress={setTip100}>
                  <Text style={styles.text3}>Rs 100</Text>
                </TouchableOpacity>
              </View>
            )}
            {tip == 120 ? (
              <View>
                <TouchableOpacity
                  style={styles.seeAllSelected}
                  onPress={setTip120}>
                  <Text style={styles.text4}>Rs 120</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity style={styles.seeAll} onPress={setTip120}>
                  <Text style={styles.text3}>Rs 120</Text>
                </TouchableOpacity>
              </View>
            )}
            <View>
              <TextInput
                style={styles.inputStyle}
                keyboardType="numeric"
                placeholder="Enter Amount"
                onChangeText={(number) => setTip(number)}
                value={tip}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.Bottomcontainer}>
        <TouchableOpacity style={styles.BottomButton}>
          <Text style={styles.text2}>CheckOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
