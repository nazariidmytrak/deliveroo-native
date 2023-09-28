import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Header from '@/components/homeScreen/header';
import Search from '@/components/homeScreen/search';
import Categories from '@/components/homeScreen/categories';
import Featured from '@/components/homeScreen/featured';
import { fetchData } from '@/helpers/fetchData';
import { setRestaurants } from 'store/restaurant/restaurantSlice';
import { store } from 'store';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  useEffect(() => {
    fetchData(
      `*[_type == "restaurant"] {
        ...,
        dishes[]->,
        type->{
          name
        }
      }`
    ).then((result) => {
      store.dispatch(setRestaurants(result));
    });
  }, []);
  return (
    <SafeAreaProvider className='bg-white' style={{ paddingTop: insets.top }}>
      <Header />
      <Search />
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <Categories />
        <Featured />
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
