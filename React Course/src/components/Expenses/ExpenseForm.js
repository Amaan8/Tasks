import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChange = (e) => {
    setEnteredTitle(e.target.value);
    console.log(enteredTitle);
  };

  const amountChange = (e) => {
    setEnteredAmount(e.target.value);
    console.log(enteredAmount);
  };

  const dateChange = (e) => {
    setEnteredDate(e.target.value);
    console.log(enteredDate);
  };

  return (
    <form className="new-expense">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" onChange={amountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
