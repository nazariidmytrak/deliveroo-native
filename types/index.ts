//NAVIGATION
export type RootStackParamList = {
  Home: undefined;
  Restaurant: RestaurantScreenParams;
};

type RestaurantScreenParams = {
  _id: string;
};

//CATEGORY
export type CategoryProps = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  image: ImageProps;
  name: string;
};

//FEATURED CATEGORY
export type FeaturedCategoryProps = {
  _id: string;
  name: string;
  short_description: string;
  restaurants: Reference[];
};

//DISH
export type DishProps = {
  _id: string;
  name: string;
  price: number;
  short_description: string;
  image: ImageProps;
};

//RESTAURANT
export type RestaurantProps = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  address: string;
  dishes: DishProps[];
  image: ImageProps;
  lat: number;
  long: number;
  name: string;
  rating: number;
  short_description: string;
  type: RestaurantTypeReference;
};

//OTHERS
type Reference = {
  _key: string;
  _ref: string;
  _type: string;
};

export type ImageProps = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

type RestaurantTypeReference = Reference & {
  name?: string;
};

/* type DishReference = Reference; */
