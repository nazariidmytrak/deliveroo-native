import { ViewStyle } from 'react-native';

import { selectBasketItems } from 'store/basket/basketSelectors';
import { useAppSelector } from 'store/hooks';
import { useBasketAnimation } from './useBasketAnimation';

const useGetBasketStyles = () => {
  const basketDishes = useAppSelector(selectBasketItems);
  const { fadeAnim, translateY } = useBasketAnimation(basketDishes);
  const animatedStyles: {
    container: ViewStyle;
    animatedTransform: ViewStyle;
    opacity: ViewStyle;
  } = {
    container: {
      position: 'absolute',
      bottom: 10,
      width: '100%',
      zIndex: 50,
      alignItems: 'center',
    },
    animatedTransform: {
      translateY: translateY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -10],
      }),
    },
    opacity: {
      opacity: fadeAnim,
    },
  };
  return animatedStyles;
};

export default useGetBasketStyles;
