import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "../Expenses/styles/Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
// component initialization
const Expenses = (props) => {
  // this hook sets the filtered year to 2020 as a placeholder for yearfilter
  const [filteredYear, setfilteredYear] = useState("2020");
  // we create this function to accept the incoming prop data from ExpenseFilter and assign the data to selectedYear
  const filterYearChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  // Creates a variable that filters and stores expenses in an array that matches filtered year.
  const filteredExpenses = props.items.filter((expense) => {
    // NOTE: if expense year as string is equal to our filtered year return it
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className='expenses'>
        {/* HERE: We create props to access in Expense filter. */}
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={filterYearChangeHandler}
        />
        {/*Then we map those filtered expenses here*/}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
