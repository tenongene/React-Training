import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('Expenses.js');
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* {' '} */}
        {/*class named expenses here mostly for css styling access*/}
        {/* setting 'props' (properties) in our JSX item*/}
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[4].title}
          amount={props.expenses[4].amount}
          date={props.expenses[4].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
