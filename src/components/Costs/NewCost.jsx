import CostForm from './CostForm'
import './general.css'

const NewCost = props => {
	const saveCostDataHandler = inputCostData => {
		const costData = {
			...inputCostData,
			id: Math.random().toString()
		}
		props.onAddCost(costData)
	}

	return (
		<div className='new__cost'>
			<CostForm
				onSaveCostData={saveCostDataHandler}
			/>
		</div>
	)
}

export default NewCost
