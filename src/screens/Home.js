import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import Container from '../components/Home/Container'
import Header from '../components/Home/Header'
import Search from '../components/Home/Search'
import Categories from '../components/Home/Categories'
import Popular from '../components/Home/Popular'
const Home = () => {
	return (
		<Container>
			<StatusBar style="auto" />
			<Header />
			<Text style={styles.food}>Food</Text>
			<Text style={styles.delivery}>Delivery</Text>
			<Search />
			<Categories />
			<Popular />
		</Container>
	)
}
export default Home
const styles = StyleSheet.create({
	food: {
		fontFamily: 'Montserrat_400Regular',
		fontSize: 16,
		paddingLeft: 20,
		marginTop: 30,
	},
	delivery: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 32,
		paddingLeft: 20,
		marginTop: 5,
	},
})
