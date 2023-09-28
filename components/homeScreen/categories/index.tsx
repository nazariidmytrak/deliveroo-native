import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import CategoryCard from '../cards/categoryCard';
import { fetchData } from '@/helpers/fetchData';
import { urlFor } from '@/helpers/urlFor';
import { CategoryProps } from '@/types/index';

const Categories = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    fetchData(`*[_type == "category"]`).then((result) => setCategories(result));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 10 }}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
