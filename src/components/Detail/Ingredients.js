import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import ItemIngredients from './ItemIngredients'
const Ingredients = () => {
	const { item } = useRoute().params
	return (
		<View style={styles.wrapper}>
			<Text style={styles.txtTitle}>Ingredients</Text>
			<View style={styles.listWrapper}>
				<FlatList
					data={item.ingredients}
					horizontal
					keyExtractor={(item) => item.id}
					renderItem={ItemIngredients}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}

export default Ingredients

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 44,
	},
	txtTitle: {
		fontFamily: 'Montserrat-Bold',
		fontSize: 16,
		paddingLeft: 20,
	},
	listWrapper: {
		marginTop: 19,
	},
})
