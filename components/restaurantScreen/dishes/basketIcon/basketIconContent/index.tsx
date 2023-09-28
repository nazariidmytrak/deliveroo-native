import { Pressable, Text } from 'react-native';

const BasketIconContent = ({ basketDishes, basketTotal }) => (
  <Pressable className='flex-row items-center space-x-1 p-4 mx-5 bg-[#00ccbb] rounded-full'>
    <Text className='py-1 px-3 rounded-md text-white text-lg bg-[#01a296] font-extrabold'>
      {basketDishes.length}
    </Text>
    <Text className='flex-1 text-white font-extrabold text-lg text-center'>
      View Basket
    </Text>
    <Text className='text-lg text-white font-extrabold'>
      <Text>{basketTotal} £</Text>
    </Text>
  </Pressable>
);

export default BasketIconContent;
