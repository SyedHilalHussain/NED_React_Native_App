import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src1/navigation/DrawerNavigator';
import { DateProvider } from './src1/Components/DateContext';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <DateProvider>
       
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      </DateProvider>
    </GestureHandlerRootView>
  );
}
