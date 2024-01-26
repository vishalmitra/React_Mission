import React, {useState } from "react";
import './Expense.css';
import Card from "./Card";
import ExpenseDate from "./DateExpenses";
import ExpensesFilter from "./NewExpense/ExpenseFilter";

const Items = (props) =>
{
    /* useState in been imported header section it takes values as this timeprops
     value gives two values as one is actual and other where that is updated
     can keep any variable name as we did setTitle but the same in click function */
    const [title, setTitle] = useState(props.product.title);


   
     
    const click = () => {
        setTitle('updated bt now')
        console.log(" the button was clicked");
    };
    return (
        <>
        
        <div className="expense-item">
         
           <ExpenseDate product ={props.product.date} />
            <div className="expense-item__description" >
                <h2>{title} </h2>
               
                <div className="expense-item__price" > {props.product.amount}</div>
            </div>


            <button onClick={click} > change title </button>

            </div>
            </>);


}

export default Items;  