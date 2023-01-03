import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 0, 3);
  const expenseTitle = "Movies";
  const expenseAmount = 200;
  const locationOfExpenditure = "Delhi";

  return (
    <div>
      <h2>Expense Items</h2>
      <div className="expense-item">
        <div>
          {expenseDate.toISOString()} - {locationOfExpenditure}
        </div>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">Rs {expenseAmount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
