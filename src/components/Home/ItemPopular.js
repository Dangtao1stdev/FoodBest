import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LIGHT, PRIMARY, WHITE } from '../../assets/Colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { DETAIL } from '../../constant'
const ItemPopular = (item) => {
	const navigation = useNavigation()
	return (
		<TouchableOpacity key={item.id} onPress={() => navigation.navigate(DETAIL, { item: item })}>
			<View style={[styles.itemWrapper, { marginTop: item.id == 1 ? 11 : 0 }]}>
				<View>
					<View style={styles.titleItem}>
						<View style={styles.Header}>
							<FontAwesome5 name="chess-king" size={18} color={PRIMARY} />
							<Text style={[styles.txtHeader, { marginLeft: 10 }]}>Top of the week</Text>
						</View>
						<Text style={styles.txtHeader}>Primavera Pizza</Text>
						<Text style={[styles.txtHeader, { fontSize: 12, color: LIGHT }]}>Weight {item.weight}</Text>
					</View>
					<View style={styles.Footer}>
						<View style={styles.button}>
							<MaterialIcons name="add" size={18} color="black" />
						</View>
						<View style={styles.rate}>
							<FontAwesome name="star" size={18} color="black" />
							<Text style={[styles.txtHeader, { fontSize: 12, marginLeft: 5 }]}>{item.rating}</Text>
						</View>
					</View>
				</View>
				<View style={styles.imgWrapper}>
					<Image source={item.image} style={styles.image} resizeMode="stretch" />
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default ItemPopular

const styles = StyleSheet.create({
	itemWrapper: {
		height: 161,
		backgroundColor: WHITE,
		borderRadius: 25,
		flexDirection: 'row',
		overflow: 'hidden',
		justifyContent: 'space-between',
		marginBottom: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},
	titleItem: {
		flex: 1,
		marginLeft: 20,
		marginTop: 24,
		justifyContent: 'space-between',
	},
	Header: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	txtHeader: {
		fontFamily: 'Montserrat_700Bold',
		fontSize: 14,
	},
	image: {
		width: 210,
		height: 125,
		marginLeft: 20,
	},
	imgWrapper: {
		justifyContent: 'center',
	},
	button: {
		width: 90,
		height: 53,
		borderTopRightRadius: 25,
		borderBottomLeftRadius: 25,
		backgroundColor: PRIMARY,

		justifyContent: 'center',
		alignItems: 'center',
	},
	Footer: {
		marginTop: 10,
		flexDirection: 'row',
	},
	rate: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 20,
	},
})
