//import { useState } from 'react'
import React from 'react'
import Expense from './Expense'

const ExpenseList = () => {
  //const [expenses, setExpenses] = useState([])

  return (
    <ul className="grid grid-cols-1 gap-1">
      <Expense />
      <Expense />
      <Expense />
      <Expense />
      <Expense />
      <Expense />
    </ul>
  )
}

export default ExpenseList
