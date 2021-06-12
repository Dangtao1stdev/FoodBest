import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import popularData from '../../assets/data/popularData'
import ItemPopular from './ItemPopular'

const Popular = () => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.txtPopular}>Popular</Text>
			{popularData.map(ItemPopular)}
		</View>
	)
}

export default Popular

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 20,
		marginHorizontal: 20,
	},
	txtPopular: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 16,
	},
})
