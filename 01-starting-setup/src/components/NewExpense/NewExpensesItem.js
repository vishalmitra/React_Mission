import React from 'react';
import "./NewExpensesItem.css"
import ExpenseForm from "./ExpensesForm"

// lecture 80  sending props from child to parent
const NewExpenses = (props) => {
    
    const expenseHandler = (parameter) =>
    {
        const formdata = {
            ...parameter,
            id :Math.random().toString()
        };
       // console.log(formdata);
        props.saved(formdata);
    };
   
   
      return (
        <div className='new-expense'>
            <ExpenseForm  onSave={expenseHandler} />  
        </div>
             );
};

export default NewExpenses;