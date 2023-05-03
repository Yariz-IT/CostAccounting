import NewCost from './components/Costs/NewCost'
import Costs from './components/Costs/Costs'

import { useState } from 'react'

const App = () => {
	const INITIAL_COSTS = [
		{
			id: '1',
			date: new Date(2021, 5, 17),
			description: 'Notebook',
			amount: 550
		},

		{
			id: '2',
			date: new Date(2020, 3, 12),
			description: 'Phone',
			amount: 500
		},

		{
			id: '3',
			date: new Date(2020, 2, 5),
			description: 'Mouse',
			amount: 50
		}
	]

	const [costs, setCosts] = useState(INITIAL_COSTS)
	const addCostHandler = cost => {
		setCosts(prevCosts => {
			return [cost, ...prevCosts]
		})
	}
	return (
		<div>
			<NewCost onAddCost={addCostHandler} />
			<Costs costs={costs} />
		</div>
	)
}

export default App
