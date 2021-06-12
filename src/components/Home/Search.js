import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { LIGHT } from '../../assets/Colors'
const Search = () => {
	return (
		<View style={styles.wrapper}>
			<AntDesign name="search1" size={18} color="black" />
			<TextInput placeholder="Search..." style={styles.input} />
		</View>
	)
}

export default Search

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginTop: 30,
	},
	input: {
		flex: 1,
		marginLeft: 12,
		fontSize: 14,
		fontFamily: 'Montserrat_600SemiBold',
		borderBottomWidth: 2,
		borderBottomColor: LIGHT,
		paddingBottom: 5,
	},
})
