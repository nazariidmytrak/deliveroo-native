import React from 'react';
import { View, TextInput } from 'react-native';
import { Foundation, Ionicons } from '@expo/vector-icons';

const Search = () => {
  return (
    <View className='flex-row items-center pb-2 mx-4 space-x-2'>
      <View className='flex-row flex-1 items-center space-x-2 bg-gray-200 p-3'>
        <Foundation name='magnifying-glass' size={20} color='gray' />
        <TextInput
          className='w-full'
          placeholder='Restaurants and cuisines'
          keyboardType='default'
        />
      </View>
      <Ionicons name='settings-outline' size={24} color='#00ccbb' />
    </View>
  );
};

export default Search;
