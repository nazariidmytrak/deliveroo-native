import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { fetchData } from '@/helpers/fetchData';
import FeaturedRow from './featuredRow';
import { FeaturedCategoryProps } from '@/types/index';

const Featured = () => {
  const [featuredCategories, setFeaturedCategories] = useState<
    FeaturedCategoryProps[]
  >([]);

  useEffect(() => {
    fetchData(`*[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`).then((data) => {
      setFeaturedCategories(data);
    });
  }, []);
  return (
    <View>
      {featuredCategories?.map((category) => (
        <FeaturedRow
          key={category._id}
          title={category.name}
          description={category.short_description}
        />
      ))}
    </View>
  );
};

export default Featured;
