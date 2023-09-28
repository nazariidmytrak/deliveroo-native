import React from 'react';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const MinusButton = ({ onPress, disabled }) => (
  <Pressable onPress={onPress} disabled={disabled}>
    <AntDesign
      color={disabled ? 'gray' : '#00ccbb'}
      name='minuscircle'
      size={40}
    />
  </Pressable>
);

export default MinusButton;
