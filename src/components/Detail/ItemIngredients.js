import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { WHITE } from '../../assets/Colors'

const ItemIngredients = ({ item }) => {
	return (
		<View style={[styles.itemWrapper, { marginLeft: item.id == '1' ? 20 : 0 }]}>
			<Image source={item.image} style={styles.image} resizeMode="contain" />
		</View>
	)
}

export default ItemIngredients
const styles = StyleSheet.create({
	itemWrapper: {
		height: 80,
		width: 100,
		borderRadius: 15,
		backgroundColor: WHITE,
		alignItems: 'center',
		marginRight: 15,
		marginBottom: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	image: {
		height: 80,
		width: 80,
	},
})
