import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import '../Expenses/styles/Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { ExpensesChart } from './ExpensesChart';
import { useState } from 'react';

// component initialization
const Expenses = (props) => {
  // this hook sets the filtered year to 2020 as a placeholder for year filter
  const [filteredYear, setFilteredYear] = useState('2020');
  // we create this function to accept the incoming prop data from ExpenseFilter and assign the data to selectedYear
  const filterYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Creates a variable that filters and stores expenses in an array that matches filtered year.
  const filteredExpenses = props.items.filter((expense) => {
    // If expense year as string is equal to our filtered year return it
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          /* HERE: We create props to access in Expense filter. */
          selected={filteredYear}
          onYearChange={filterYearChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
