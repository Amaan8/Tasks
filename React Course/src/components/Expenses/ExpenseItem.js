import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  const deleteExpense = (e) => {
    let item = e.target.parentElement;
    item.remove();
  };

  const changeAmount = () => {
    setAmount(100);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} amount={amount} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpense}>Delete Expense</button>
      <button onClick={changeAmount}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;
