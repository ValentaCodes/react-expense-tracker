import React from 'react';
import ExpenseItem from './ExpenseItem';
import './styles/ExpensesList.css';

const ExpensesList = (props) => {
  // We can add logic with JSX expressions before return statement
  //   let expenseContent = <p>No expenses found</p>;

  // This makes our JSX code cleaner and this component easier to read
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
