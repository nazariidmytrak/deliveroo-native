import React, { useEffect, useRef } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Pressable,
  Animated,
} from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

import { RootStackParamList } from '@/types/index';
import Dishes from '@/components/restaurantScreen/dishes';
import { useAppSelector } from 'store/hooks';
import { selectBasketItems } from 'store/basket/basketSelectors';
import BasketIconContainer from '@/components/restaurantScreen/dishes/basketIcon/basketIconContainer';
import { urlFor } from '@/helpers/urlFor';
import { selectRestaurantById } from 'store/restaurant/restaurantSelectors';
import { useBasketAnimation } from 'hooks/useBasketAnimation';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const basketDishes = useAppSelector((state) => selectBasketItems(state));
  const route = useRoute<RouteProp<RootStackParamList, 'Restaurant'>>();
  const { _id } = route.params;
  const { image, name, rating, type, address, short_description, dishes } =
    useAppSelector((state) => selectRestaurantById(state, _id));
  const genre = type?.name;
  const { paddingBottomAnim } = useBasketAnimation(basketDishes);

  return (
    <>
      <BasketIconContainer basketDishes={basketDishes} />
      <ScrollView>
        <View className='relative'>
          <Image
            className='w-full h-56 bg-gray-300 p-4'
            source={{
              uri: urlFor(image).url(),
            }}
          />
          <Pressable
            className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
            onPress={navigation.goBack}
          >
            <AntDesign name='arrowleft' size={20} color='#00ccbb' />
          </Pressable>
        </View>

        <View className='bg-white'>
          <View className='px-4 pt-4'>
            {/* TITLE */}
            <Text className='text-3xl font-bold'>{name}</Text>
            {/* RATING && ADDRESS */}
            <View className='space-x-1 my-1'>
              <View className='flex-row items-center space-x-1'>
                <Entypo name='star' size={22} opacity={0.8} color='green' />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-green-500'>
                    {rating} · {genre}
                  </Text>
                </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                <FontAwesome
                  name='map-marker'
                  size={22}
                  opacity={0.4}
                  color='gray'
                />
                <Text className='text-xs text-gray-500'>{address}</Text>
              </View>
            </View>
            {/* SHORT DESCRIPTION */}
            <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
          </View>
          {/* BUTTON */}
          <Pressable className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <AntDesign
              name='questioncircleo'
              size={20}
              color='gray'
              opacity={0.6}
            />
            <Text className='pl-2 flex-1 text-md font-bold'>
              Have a food alergy?
            </Text>
            <Entypo name='chevron-right' size={20} color='#00ccbb' />
          </Pressable>
        </View>

        <Animated.View style={{ paddingBottom: paddingBottomAnim }}>
          <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
          <Dishes dishes={dishes} />
        </Animated.View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
