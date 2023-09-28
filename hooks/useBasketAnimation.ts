import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { DishProps } from '../types';

export const useBasketAnimation = (basketDishes: DishProps[]) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const paddingBottomAnim = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    if (basketDishes.length > 0) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 1,
          friction: 2,
          useNativeDriver: true,
        }),
        Animated.timing(paddingBottomAnim, {
          toValue: 96,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(paddingBottomAnim, {
          toValue: 24,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [basketDishes.length, fadeAnim, translateY, paddingBottomAnim]);

  return {
    fadeAnim,
    translateY,
    paddingBottomAnim,
  };
};
