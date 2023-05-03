import './general.css'
import CostItem from './CostItem'

const CostList = props => {
	if (props.costs.length === 0) {
		return (
			<h2 className='cost__list-fallback'>
				<p>Расходы отсутсвуют</p>
			</h2>
		)
	}

	return (
		<li className='cost__list'>
			{props.costs.map(cost => (
				<CostItem
					key={cost.id}
					date={cost.date}
					description={cost.description}
					amount={cost.amount}
				/>
			))}
		</li>
	)
}

export default CostList
