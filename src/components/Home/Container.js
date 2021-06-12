import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { BACKGROUND } from '../../assets/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
const Container = ({ children }) => {
	return (
		<ScrollView style={styles.container}>
			<SafeAreaView>
				<View>{children}</View>
			</SafeAreaView>
		</ScrollView>
	)
}

export default Container

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BACKGROUND,
	},
})
