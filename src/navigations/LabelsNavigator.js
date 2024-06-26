import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LabelScreen from '../screens/Labels/LabelScreen';


const Stack = createStackNavigator();

const LabelsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LabelScreen" component={LabelScreen} />
    </Stack.Navigator>
  );
}

export default LabelsNavigator;
