import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [addExpense, setAddExpense] = useState(false);

  const titleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChange = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChange = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseDetails = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseDetails);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setAddExpense(false);
  };

  const newExpense = () => {
    setAddExpense(true);
  }

  const cancelAdding = () => {
    setAddExpense(false);
  }

  return (
    <div className="new-expense">
      {!addExpense && <button onClick={newExpense}>Add New Expense</button>}
      {addExpense && 
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              value={enteredAmount}
              onChange={amountChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChange}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelAdding}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>}
    </div>
  );
};

export default ExpenseForm;
