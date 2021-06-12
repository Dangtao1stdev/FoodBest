import 'react-native-gesture-handler'
import React from 'react'
import AppNavigationContainer from './src/navigation'
import { useFonts } from 'expo-font'
import {
	Montserrat_400Regular,
	Montserrat_700Bold,
	Montserrat_600SemiBold,
	Montserrat_500Medium,
} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading'
export default function App() {
	const [loaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_700Bold,
		Montserrat_600SemiBold,
		Montserrat_500Medium,
		'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
	})

	if (!loaded) {
		return <AppLoading />
	}
	return <AppNavigationContainer />
}
