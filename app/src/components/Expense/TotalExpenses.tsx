interface TotalExpensesProps {
	total: number
}

const TotalExpenses: React.FC<TotalExpensesProps> = ({ total }) => {
	return <p>Total Expenses: {total}</p>
}

export default TotalExpenses
