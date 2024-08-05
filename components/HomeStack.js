import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from './LibraryScreen';
import BookInfoScreen from './BookInfoScreen';

const MainStack = createStackNavigator();

function HomeStack() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Library" component={LibraryScreen} options={{ title: 'List' }} />
      <MainStack.Screen name="BookInfo" component={BookInfoScreen} options={{ title: 'Book Info' }} />
    </MainStack.Navigator>
  );
}

export default HomeStack;
