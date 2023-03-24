import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../card/Card';
import CardMedia from '../card/CardMedia';
import CardContent from '../card/CardContent';
import {spacing, sizes, colors} from '../../constants/theme';
import CardFavoriteIcon from '../card/CardFavoriteIcon';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';


const SearchCard = ({item, index}) => {
  const navigation = useNavigation();
  const even = index % 2 === 0;
  return (
    <View
      
      style={{
        paddingTop: index === 1 ? spacing.l : 0,
        paddingLeft: !even ? spacing.l / 3 : 0,
        paddingRight: even ? spacing.l / 3 : 0,
        paddingBottom: spacing.l / 2,
        
      }}>
      <Card
        onPress={() => {
          navigation.navigate('RecipeScreen', { recipeId: item.idDrink});
            
        }}
        style={{
          width: '100%',
          height: index % 3 === 0 ? 180 : 240,
        }}>
        <CardFavoriteIcon onPress={() => {}} />
        <SharedElement style={styles.media}>
          <CardMedia source={item.strDrinkThumb} borderBottomRadius />
        </SharedElement>
        <CardContent>
          <View style={styles.titleBox}>
            <Text style={styles.title}  numberOfLines={1}>
              {item.strDrink}
            </Text>
          </View>
        </CardContent>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  media: {
    flex: 1,
  },
  title: {
    fontSize:parseInt(sizes.body),
    fontWeight: 'bold',
    color: colors.primary,
    marginVertical: 4,
  },
  titleBox: {
    flex: 1,
  },
 
});

export default SearchCard;