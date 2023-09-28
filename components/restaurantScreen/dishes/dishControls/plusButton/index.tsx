import React, { useRef } from 'react';
import { Animated, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const PlusButton = ({ onPress }) => (
  <Pressable onPress={onPress}>
    <AntDesign name='pluscircle' size={40} color='#00ccbb' />
  </Pressable>
);

export default PlusButton;
