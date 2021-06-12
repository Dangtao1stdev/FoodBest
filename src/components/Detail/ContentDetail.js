import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LIGHT } from '../../assets/Colors'

const ContentDetail = ({ title, content, size }) => {
	return (
		<View>
			<Text style={[styles.txtTitle, { marginTop: size && 20 }]}>{title}</Text>
			<Text style={styles.txtContent}>{content}</Text>
		</View>
	)
}

export default ContentDetail

const styles = StyleSheet.create({
	txtTitle: {
		fontSize: 14,
		color: LIGHT,
		fontFamily: 'Montserrat_500Medium',
	},
	txtContent: {
		marginTop: 5,
		fontSize: 16,
		fontFamily: 'Montserrat_600SemiBold',
	},
})
