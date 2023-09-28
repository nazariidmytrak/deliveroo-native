import React, { useState } from 'react';
import { Pressable, View, Text, Image } from 'react-native';

import { urlFor } from '@/helpers/urlFor';
import { useAppDispatch } from 'store/hooks';
import { addToBasket, removeFromBasket } from 'store/basket/basketSlice';
import DishControls from '../dishControls';
import { DishProps } from '@/types/index';

const DishRow = ({ _id, name, image, price, short_description }: DishProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useAppDispatch();

  const addItemToBusket = () => {
    dispatch(addToBasket({ _id, name, image, price, short_description }));
  };

  const removeItemFromBusket = () => {
    dispatch(removeFromBasket(_id));
  };

  return (
    <>
      <Pressable
        onPress={() => setIsPressed((prev) => !prev)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className='flex-row'>
          {/* LEFT COLUMN */}
          <View className='flex-1 pr-2 grid gap-y-1'>
            <Text className='text-lg'>{name}</Text>
            <Text className='text-gray-400'>{short_description}</Text>
            <Text className='text-gray-500 font-bold'>{price} £</Text>
          </View>
          {/* RIGHT COLUMN */}
          <View>
            <Image
              className='h-20 w-20 bg-gray-400 p-4'
              style={{ borderWidth: 1, borderColor: '#f3f3f4' }}
              source={{
                uri: urlFor(image).url(),
              }}
            />
          </View>
        </View>
      </Pressable>

      {isPressed && (
        <DishControls
          id={_id}
          onRemove={removeItemFromBusket}
          onAdd={addItemToBusket}
        />
      )}
    </>
  );
};

export default DishRow;
