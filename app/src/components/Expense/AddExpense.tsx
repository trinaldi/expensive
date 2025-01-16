import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import useAddExpense from '../../hooks/useAddExpense'
import { ExpenseType } from '../../types'

type AddExpenseProps = {
	onAddExpense: (newExpense: ExpenseType) => void
}

const AddExpense = ({ onAddExpense }: AddExpenseProps) => {
	const [description, setDescription] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')
	const { userId } = useAuth()
	const [visible, setVisible] = useState(false)
	const { addExpense, loading, error, success } = useAddExpense()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!userId) return

		const expenseData: ExpenseType = {
			userId: parseInt(userId) ?? undefined,
			description,
			amount: parseFloat(amount),
			date,
		}

		try {
			const newExpense = await addExpense(expenseData)
			onAddExpense(newExpense)
			setDescription('')
			setAmount('')
			setDate('')
		} catch (error) {
			console.error('Error adding expense:', error)
		}

		if (success) {
			setDescription('')
			setAmount('')
			setDate('')
			setVisible(false)
		}
	}

	return (
		<div className="justify-center w-96">
			<p
				className="text-green-700 cursor-pointer"
				onClick={() => setVisible(!visible)}
			>
				+ Add Expense
			</p>

			{visible && (
				<form onSubmit={handleSubmit} className="mt-4 space-y-4">
					<div>
						<label
							htmlFor="description"
							className="block text-sm font-medium text-gray-700"
						>
							Description
						</label>
						<input
							type="text"
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
							placeholder="Enter description"
							className="w-full p-2 mt-1 border border-gray-300 rounded"
						/>
					</div>

					<div>
						<label
							htmlFor="amount"
							className="block text-sm font-medium text-gray-700"
						>
							Amount
						</label>
						<input
							type="number"
							id="amount"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							required
							min="0"
							step="0.01"
							placeholder="Enter amount"
							className="w-full p-2 mt-1 border border-gray-300 rounded"
						/>
					</div>

					<div>
						<label
							htmlFor="date"
							className="block text-sm font-medium text-gray-700"
						>
							Date
						</label>
						<input
							type="date"
							id="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
							className="w-full p-2 mt-1 border border-gray-300 rounded"
						/>
					</div>

					{loading && <p>Submitting...</p>}
					{error && <p className="text-red-600">{error}</p>}
					{success && (
						<p className="text-green-600">Expense added successfully!</p>
					)}

					<div className="flex justify-end">
						<button
							type="submit"
							className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
						>
							Add Expense
						</button>
					</div>
				</form>
			)}
		</div>
	)
}

export default AddExpense
