import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Image, View, Text } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ImageProps, RootStackParamList } from '@/types/index';
import { urlFor } from '@/helpers/urlFor';

interface Props {
  _id: string;
  title: string;
  genre: string;
  imgUrl: ImageProps;
  rating: number;
  address: string;
}

const RestaurantCard: FC<Props> = ({
  _id,
  title,
  genre,
  imgUrl,
  rating,
  address,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Pressable
      className='bg-white mr-3 shadow pb-2 max-w-[256]'
      onPress={() => {
        navigation.navigate('Restaurant', {
          _id,
        });
      }}
    >
      <Image
        className='h-36 w-64 rounded-sm object-cover'
        source={{
          uri: urlFor(imgUrl).url(),
        }}
      />

      <View className='px-5'>
        <View className='pb-1'>
          <Text className='pt-2 font-bold text-lg'>{title}</Text>
          <View className='flex-row items-center space-x-1'>
            <Entypo name='star' size={22} opacity={0.8} color='green' />
            <Text className='text-xs text-gray-500'>
              <Text className='text-green-500'>{rating}</Text> · {genre}
            </Text>
          </View>
        </View>

        <View className='flex-row items-center space-x-1'>
          <FontAwesome name='map-marker' size={22} opacity={0.4} color='gray' />
          <Text className='text-xs text-gray-500'>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantCard;
