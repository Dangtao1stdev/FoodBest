import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PRIMARY } from '../../assets/Colors'
import { AntDesign } from '@expo/vector-icons'
const ButtonOrder = () => {
	return (
		<TouchableOpacity>
			<View style={styles.btnOrder}>
				<Text style={styles.txtButton}>Place an order</Text>
				<AntDesign name="right" size={14} color="black" />
			</View>
		</TouchableOpacity>
	)
}

export default ButtonOrder

const styles = StyleSheet.create({
	btnOrder: {
		width: 335,
		height: 62,
		borderRadius: 50,
		backgroundColor: PRIMARY,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 58,
		flexDirection: 'row',
	},
	txtButton: {
		fontFamily: 'Montserrat-Bold',
		fontSize: 14,
		marginRight: 11,
	},
})
