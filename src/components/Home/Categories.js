import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import categoriesData from '../../assets/data/categoriesData'
import ItemCategory from './ItemCategory'
const Categories = () => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.txtCategory}>Categories</Text>
			<View style={styles.listCategories}>
				<FlatList
					data={categoriesData}
					horizontal
					renderItem={ItemCategory}
					keyExtractor={(item) => item.id}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}
export default Categories
const styles = StyleSheet.create({
	wrapper: {
		marginTop: 30,
	},
	txtCategory: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 16,
		paddingLeft: 20,
	},
	listCategories: {
		marginTop: 15,
	},
})
