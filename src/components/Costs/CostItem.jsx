import CostDate from './CostDate'
import './general.css'
import Card from './Card'

const CostItem = props => {
	return (
		<Card className='cost__item'>
			<CostDate date={props.date} />
			<div className='cost__item-description'>
				<h2>{props.description}</h2>
				<div className='cost__item-price'>${props.amount}</div>
			</div>
		</Card>
	)
}

export default CostItem
