import React from "react";
import "./ExpensesDate.css"

const ExpenseDate = (props) => {
    const month = props.product.toLocaleString('en-US', { month: 'long' });
    const day = props.product.toLocaleString('en-US', { day: '2-digit' });
  const year = props.product.getFullYear();

    const ExpenseDate = (props) => {
        console.log(props.product); // Check the value of props.product
        // Rest of the component code...
      };
        
    return (
        <div className="expense-date">
            <div  className="expense-date__month">{month}</div>
            <div    className="expense-date__day">{day}</div>
              <div   className="expense-date__year">{year}</div> 
        </div>
    );
};

export default ExpenseDate;