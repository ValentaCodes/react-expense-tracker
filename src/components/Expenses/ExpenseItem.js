import React from "react";
// this allows us to use the relevant css sheet
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../Expenses/styles/ExpenseItem.css";
// functional component for our Expense Items
const ExpenseItem = (props) => {
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
    </li>
  );
};
// exports component so we can use it in root App.js
export default ExpenseItem;
