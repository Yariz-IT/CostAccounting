import './general.css'

const CostDate = props => {
	const month = props.date.toLocaleString('en-EN', { month: 'long' })

	const year = props.date.getFullYear()

	const day = props.date.toLocaleString('en-EN', { day: '2-digit' })

	return (
		<div className='cost__date'>
			<div className='cost__date-month'>{month}</div>
			<div className='cost__date-year'>{year}</div>
			<div className='cost__date-day'>{day}</div>
		</div>
	)
}

export default CostDate
