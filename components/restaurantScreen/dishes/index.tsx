import { View } from 'react-native';
import React from 'react';

import DishRow from './dishRow';
import { DishProps } from '@/types/index';

const Dishes = ({ dishes }: { dishes: DishProps[] }) => {
  return (
    <View>
      {dishes.map((dish) => (
        <DishRow
          _id={dish._id}
          key={dish._id}
          name={dish.name}
          image={dish.image}
          price={dish.price}
          short_description={dish.short_description}
        />
      ))}
    </View>
  );
};

export default Dishes;
