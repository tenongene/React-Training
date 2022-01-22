import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';
import Card from './Card.js';

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 1, 12);
  // const expenseTitle = 'Car Insurance';     all redone as 'props' so you dont have to hard code values
  // const expenseAmount = 220;                can now use values from user input object, or via an API call

  const [title, setTitle] = useState(props.title);
  // useState always returns a 2 item array, first item is the variable to be updated and the second item is a function with code to the value - both items saved to variables via destructuring

  //let title = props.title;
  const clickHandler = () => {
    return setTitle('Updated!');
  };

  return (
    // <div className="expense-item">
    // {/* <div>
    //    <div>{props.date.toLocaleString('en-US', {month: 'long'})}</div>         {/*May define these props as variables in this function scope, and use them as placeholders for a more cleaner code*/}
    // {/* <div>{props.date.toLocaleString('en-US', {day: '2-digit'})}</div>
    //    <div>{props.date.getFullYear()}</div>
    // // </div> */}
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/*This is the separate date component we created, and imported at the top to replace the entire preceding code - makes the code leaner (splitting up components)*/}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      {/* // </div> */}
    </Card>
  );
}
export default ExpenseItem;
