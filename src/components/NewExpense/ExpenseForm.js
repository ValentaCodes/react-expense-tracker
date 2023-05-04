import React, { useState } from 'react';
import '../NewExpense/styles/ExpenseForm.css';
function ExpenseForm(props) {
  // we use array destructuring to update value
  // first element something that describes value
  // second element is a function that updates the value
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // NOTE: Instead of writing 3 separate state hooks like above we can create an object inside.
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // NOTE: Then we pass a function into the function
  // const inputChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return {...prevState, enteredTitle: event.target.value};
  //   });
  // };

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      amount: enteredAmount,
      date: new Date(enteredDate),
      title: enteredTitle,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  };

  // const [isOpen, setIsOpen] = useState(true);
  const [isShowing, setIsShowing] = useState(false);

  const openFormHandler = () => {
    setIsShowing(true);
  };
  const closeFormHandler = () => {
    setIsShowing(false);
  };

  let expenseForm;

  if (isShowing) {
    return (expenseForm = (
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleHandler} />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              value={enteredAmount}
              min='0.01'
              step='0.01'
              onChange={amountHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              value={enteredDate}
              min='2023-01-01'
              max='2023-12-31'
              onChange={dateHandler}
            />
          </div>
          <div className='new-expense__actions'>
            <button onClick={closeFormHandler} type='reset'>
              Cancel
            </button>
            <button type='submit'>Add Expense</button>
          </div>
        </div>
      </form>
    ));
  }

  let openForm;

  if (!isShowing) {
    openForm = (
      <div className='new-expense__controls'>
        <div className='new-expense__actions'>
          <button onClick={openFormHandler}>Add new expense</button>
        </div>
      </div>
    );
  }

  return <div>{!isShowing ? openForm : expenseForm}</div>;
}

export default ExpenseForm;
