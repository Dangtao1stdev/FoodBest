import React from 'react'
import ButtonOrder from '../components/Detail/ButtonOrder'
import HeaderDetail from '../components/Detail/HeaderDetail'
import Ingredients from '../components/Detail/Ingredients'
import ItemDetail from '../components/Detail/ItemDetail'
import Container from '../components/Home/Container'

const Detail = () => {
	return (
		<Container>
			<HeaderDetail />
			<ItemDetail />
			<Ingredients />
			<ButtonOrder/>
		</Container>
	)
}

export default Detail

