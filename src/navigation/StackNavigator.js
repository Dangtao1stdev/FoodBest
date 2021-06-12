import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { DETAIL, HOME } from '../constant'

const Stack = createStackNavigator()
const HomeNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={HOME} component={Home} />
            <Stack.Screen name={DETAIL} component={Detail} />
        </Stack.Navigator>
    )
}

export default HomeNavigator
