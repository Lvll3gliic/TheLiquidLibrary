import React from 'react';
import {
  FlatList,
  StyleSheet,
} from 'react-native';
import CategoryCard from './CategoryCard';

const CategoryList = ({list}) => {
  return (
      <FlatList
          data={list}
          renderItem={({item, i}) => <CategoryCard item={item} index={i} />}
          keyExtractor={item => item.strCategory}
        />
  );
};


export default CategoryList;