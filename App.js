import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeStack from './components/HomeStack';
import BorrowedScreen from './components/BorrowedScreen';
import { LibraryProvider } from './components/LibraryContext';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <LibraryProvider>
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen name="Library" component={HomeStack} options={{ tabBarIcon: ({ color }) => (<FontAwesome5 name="book" size={20} color={color} />) }} />
          <BottomTab.Screen name="Borrowed" component={BorrowedScreen} options={{ tabBarIcon: ({ color }) => (<FontAwesome5 name="book-reader" size={20} color={color} />) }} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </LibraryProvider>
  );
}
