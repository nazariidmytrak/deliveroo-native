import React from 'react';
import { View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
  return (
    <View className='flex-row items-center pb-3 mx-4 space-x-2'>
      <Image
        className='p-4 h-7 w-7 rounded-full'
        source={require('@/assets/images/header-icon.jpg')}
      />
      <View className='flex-1'>
        <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
        <Text className='font-bold text-xl'>
          Current Location
          <Entypo name='chevron-down' size={20} color='#00CCBB' />
        </Text>
      </View>
      <AntDesign name='user' size={35} color='#00CCBB' />
    </View>
  );
};

export default Header;
