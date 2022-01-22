import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {  
  // {/*'PROPS' is the argument that holds all the attributes defined in our custom JSX component ine one object - so sall to be accessed as properties*/}
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
