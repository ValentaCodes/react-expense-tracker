import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import '../Expenses/styles/Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

// component initialization
const Expenses = (props) => {
  // this hook sets the filtered year to 2020 as a placeholder for yearfilter
  const [filteredYear, setfilteredYear] = useState('2020');
  // we create this function to accept the incoming prop data from ExpenseFilter and assign the data to selectedYear
  const filterYearChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  // Creates a variable that filters and stores expenses in an array that matches filtered year.
  const filteredExpenses = props.items.filter((expense) => {
    // If expense year as string is equal to our filtered year return it
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // We can add logic with JSX expressions before return statement
  let expenseContent = <p>No expenses found</p>;
  // This makes our JSX code cleaner and this component easier to read
  if (filteredExpenses.length > 0) {
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          /* HERE: We create props to access in Expense filter. */
          selected={filteredYear}
          onYearChange={filterYearChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
