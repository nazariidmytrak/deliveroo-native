import { Animated, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAppSelector } from 'store/hooks';
import { selectBasketTotal } from 'store/basket/basketSelectors';
import BasketIconContent from '../basketIconContent';
import useGetBasketStyles from 'hooks/useGetBasketStyles';

const BasketIconContainer = ({ basketDishes }) => {
  const navigation = useNavigation();
  const basketTotal = useAppSelector((state) => selectBasketTotal(state));
  const animatedStyles = useGetBasketStyles();

  return (
    <Animated.View
      style={[
        animatedStyles.container,
        animatedStyles.animatedTransform,
        animatedStyles.opacity,
      ]}
    >
      <BasketIconContent
        basketDishes={basketDishes}
        basketTotal={basketTotal}
      />
    </Animated.View>
  );
};

export default BasketIconContainer;
