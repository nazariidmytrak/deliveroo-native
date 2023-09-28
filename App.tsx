import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import HomeScreen from './screens/home';
import RestaurantScreen from './screens/restaurant';
import { store } from 'store';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name='Home' component={HomeScreen} />
            <RootStack.Screen name='Restaurant' component={RestaurantScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
