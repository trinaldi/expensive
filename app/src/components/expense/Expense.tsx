const Expense = () => {
  return (
    <li className="block h-full list-none bg-white border border-gray-200 rounded transition-all duration-200 group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
      <div className="flex items-center p-6">
        <div
          className="flex items-center justify-center flex-shrink-0 w-16 h-16 rounded transition-colors duration-200 bg-green-50 group-hover:bg-green-100">
          <span className="text-4xl" role="img" aria-label="Expense Category">⏱️</span>
        </div>

        <div className="flex-grow ml-6">
          <h3
            className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
            Expense Name
          </h3>

          <div className="inline-flex items-center mt-1">
            <span className="text-gray-600 rounded">Expense Description</span>
          </div>
        </div>

        <div className="flex-shrink-0 ml-4"> Expense Value</div>
      </div>
    </li>
  )
}

export default Expense
