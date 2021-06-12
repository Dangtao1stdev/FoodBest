import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
const Header = () => {
	return (
		<View style={styles.wrapper}>
			<Image style={styles.avatar} source={require('../../assets/images/profile.png')} />
			<Feather name="menu" size={24} color="black" />
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:20
	},
	avatar: {
		height: 40,
		width: 40,
		borderRadius: 20,
		
	},
})
