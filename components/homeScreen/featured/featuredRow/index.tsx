import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import RestaurantCard from '../../cards/restaurantCard';
import { useAppSelector } from 'store/hooks';
import { selectAllRestaurants } from 'store/restaurant/restaurantSelectors';
import { RestaurantProps } from '@/types/index';

interface Props {
  title: string;
  description: string;
}

const FeaturedRow = ({ title, description }: Props) => {
  const restaurants = useAppSelector((state) => selectAllRestaurants(state));

  return (
    <View>
      <View className='flex-row items-center justify-between px-4 mt-4'>
        <Text className='text-lg font-bold'>{title}</Text>
        <AntDesign name='arrowright' color='#00ccbb' />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        className='pt-4'
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        <View className='flex-row'>
          {restaurants?.map((restaurant: RestaurantProps) => (
            <RestaurantCard
              key={restaurant._id}
              _id={restaurant._id}
              title={restaurant.name}
              genre={restaurant.type?.name}
              imgUrl={restaurant.image}
              rating={restaurant.rating}
              address={restaurant.address}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
