import "../Expenses/styles/ExpenseDate.css";
import Card from "../UI/Card";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString("en-us", { month: "long" });
  const day = props.date.toLocaleDateString("en-us", { day: "2-digit" });
  const year = props.date.toLocaleDateString("en-us", { year: 'numeric' });

  return (
    <Card className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </Card>
  );
};

export default ExpenseDate;
