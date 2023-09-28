import React from 'react';
import { Text, Pressable, Image } from 'react-native';

interface Props {
  imgUrl: string;
  title: string;
}

const CategoryCard = ({ imgUrl, title }: Props) => {
  return (
    <Pressable className='relative mr-2'>
      <Image className='h-20 w-20 rounded' source={{ uri: imgUrl }} />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>
        {title}
      </Text>
    </Pressable>
  );
};

export default CategoryCard;
