import { useState } from 'react'
import './general.css'

const CostForm = props => {
	const [inputName, setName] = useState('')
	const [inputAmount, setAmount] = useState('')
	const [inputDate, setDate] = useState('')

	const nameChangeHandler = event => {
		setName(event.target.value)
	}

	const amountChangeHandler = event => {
		setAmount(event.target.value)
	}

	const dateChangeHandler = event => {
		setDate(event.target.value)
	}

	const submitHandler = event => {
		event.preventDefault()

		const costData = {
			description: inputName,
			amount: inputAmount,
			date: new Date(inputDate)
		}
		props.onSaveCostData(costData)
		setName('')
		setDate('')
		setAmount('')
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new__cost-control'>
				<label>Название</label>
				<input type='text' value={inputName} onChange={nameChangeHandler} />
			</div>
			<div className='new__cost-control'>
				<label>Сумма</label>
				<input
					type='number'
					min='0.01'
					step='0.01'
					value={inputAmount}
					onChange={amountChangeHandler}
				/>
			</div>
			<div className='new__cost-control'>
				<label>Дата</label>
				<input
					type='date'
					min='2020.05.12'
					step='2023-12-5'
					value={inputDate}
					onChange={dateChangeHandler}
				/>
			</div>
			<div className='new__cost-actions'>
				<button type='submit'>Добавить расход</button>
				<button type='submit' onClick={props.onCansel}>Отмена</button>
			</div>
		</form>
	)
}

export default CostForm
