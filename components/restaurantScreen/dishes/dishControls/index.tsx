import React from 'react';
import { View, Text } from 'react-native';

import { useAppSelector } from 'store/hooks';
import { selectBasketItemsById } from 'store/basket/basketSelectors';
import MinusButton from './minusButton';
import PlusButton from './plusButton';

interface Props {
  id: string;
  onRemove: () => void;
  onAdd: () => void;
}

const DishControls = ({ id, onRemove, onAdd }: Props) => {
  const items = useAppSelector((state) => selectBasketItemsById(state, id));

  return (
    <View className='bg-white px-4'>
      <View className='flex-row items-center space-x-2 py-2'>
        <MinusButton onPress={onRemove} disabled={!items.length} />
        <Text className='text-lg pr-2'>{items.length}</Text>
        <PlusButton onPress={onAdd} />
      </View>
    </View>
  );
};

export default DishControls;
