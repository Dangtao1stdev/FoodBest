import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DARK, PRIMARY, SECONDARY, WHITE } from '../../assets/Colors'
import { AntDesign } from '@expo/vector-icons'
const ItemCategory = ({ item }) => {
	return (
		<View
			style={[
				styles.itemWrapper,
				{
					marginLeft: item.id == 1 ? 20 : 0,
					backgroundColor: item.selected ? PRIMARY : WHITE,
				},
			]}
		>
			<Image source={item.image} style={styles.img} />
			<Text style={styles.title}>{item.title}</Text>
			<TouchableOpacity>
				<View style={[styles.button, { backgroundColor: item.id == 1 ? WHITE : SECONDARY }]}>
					<AntDesign name="right" size={14} color={item.id == 1 ? DARK : WHITE} />
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default ItemCategory

const styles = StyleSheet.create({
	itemWrapper: {
		height: 177,
		width: 105,
		backgroundColor: '#ffff',
		borderRadius: 20,
		marginRight: 20,
		marginVertical: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},
	img: {
		height: 60,
		width: 60,
		alignSelf: 'center',
		marginTop: 24,
	},
	title: {
		alignSelf: 'center',
		marginTop: 10,
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 14,
		color: DARK,
	},
	button: {
		height: 26,
		width: 26,
		borderRadius: 13,
		alignSelf: 'center',
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: PRIMARY,
	},
})
