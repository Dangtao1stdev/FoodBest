import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeNavigator from './StackNavigator'
const AppNavigationContainer = () => {
    return (
        <NavigationContainer>
            <HomeNavigator/>
        </NavigationContainer>
    )
}

export default AppNavigationContainer
