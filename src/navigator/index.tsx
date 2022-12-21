import {NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator, Header, HeaderStyleInterpolators, StackNavigationProp} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import React from 'react';
import 'react-native-gesture-handler'

import {
  ScreenStackHeaderCenterView,
  ScreenStackHeaderConfig,
} from 'react-native-screens';
import { NativeModules, Platform, StyleSheet } from 'react-native';
import Detail from '../pages/Detail';

/**
 * 这里的type 是 类型别名
 */
export type RootStackParamList = {
  BottomTabs: {
    screen?:string;
  };
  Detail: {
    id:number;
  };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>

let Stack = createStackNavigator<RootStackParamList>();
// {
//     Navigator,
//     Screen
// }

class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
              ...Platform.select({
                android:{
                  elevation : 0,
                  borderBottomWidth:StyleSheet.hairlineWidth
                },
              
              })
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerTitle:'首页',
            headerMode:'screen',
            headerStyleInterpolator : HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled:true,
            gestureDirection:'horizontal',
            
          }}>
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
