import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../card/Card';
import { colors} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';



const CategoryCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Card
        onPress={() => {
          navigation.navigate('DrinksByCategoryScreen', { category: item.strCategory});
            
        }}
        style={styles.cardBox}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            {item.strCategory}
          </Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: parseInt(27),
    color: colors.white
  },
  titleBox: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: '15%',
  },
  cardBox: {
    width: '90%',
    height: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5%',
    backgroundColor: colors.black
  },
 
});

export default CategoryCard;