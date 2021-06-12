import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { DARK, LIGHT, PRIMARY, WHITE } from '../../assets/Colors'
import { useNavigation } from '@react-navigation/native'
const HeaderDetail = () => {
	const navigation = useNavigation()
	return (
		<View style={styles.wrapper}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<View style={styles.left}>
					<AntDesign name="left" size={14} color={DARK} />
				</View>
			</TouchableOpacity>
			<View style={styles.right}>
				<AntDesign name="star" size={14} color={WHITE} />
			</View>
		</View>
	)
}

export default HeaderDetail

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	left: {
		width: 40,
		height: 40,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: LIGHT,
		justifyContent: 'center',
		alignItems: 'center',
	},
	right: {
		width: 40,
		height: 40,
		backgroundColor: PRIMARY,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
