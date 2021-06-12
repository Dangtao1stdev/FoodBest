import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { PRICE } from '../../assets/Colors'
import ContentDetail from './ContentDetail'
const ItemDetail = () => {
	const { item } = useRoute().params
	return (
		<View style={styles.detailWrapper}>
			<Text style={styles.txtDetail}>{item.title}</Text>
			<Text style={styles.txtPrice}>${item.price}</Text>
			<View style={styles.contentDetail}>
				<View>
					<ContentDetail title="Size" content={item.sizeName + ' 14"'} />
					<ContentDetail title="Crust" content={item.crust} size />
					<ContentDetail title="Delivery in" content={item.deliveryTime + ' min'} size />
				</View>
				<Image source={item.image} style={styles.image} />
			</View>
		</View>
	)
}

export default ItemDetail

const styles = StyleSheet.create({
	detailWrapper: {
		marginTop: 30,
		paddingLeft: 20,
	},
	txtDetail: {
		fontFamily: 'Montserrat-Bold',
		fontSize: 32,
		width: 200,
	},
	txtPrice: {
		fontSize: 32,
		fontFamily: 'Montserrat_600SemiBold',
		color: PRICE,
	},
	contentDetail: {
		flexDirection: 'row',
		marginTop: 30,
		alignItems:'center'
	},
	image: {
		height: 176,
		width: 296,
	},
})
