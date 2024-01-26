import React, {useState } from "react";
import "./ExpensesForm.css";

const ExpenseForm = (props) =>   {
 
    // const [title, Titlechanged] = useState('')
    // const [Amount, Amountchanged] = useState('')
    // const [Date,Datechanged]= useState('')  
    //
    // the below is the alternative for the having all in one 
    const [input, changed] = useState({ title: "", amount: "", date: "" });
    
    const TitlechangeHandler = (event) => {
        //     Titlechanged(event.target.vaule);       
        //  changed({ ...input, title: "" });  this syntax will not works sometimes because of state changes
        // new syntax is here
        changed((prevState) => {
            return { ...prevState, title: event.target.value };
        });
    
    };
    
    const AmountchangeHandler = (event) => {
        // Amountchanged(event.target.vaule); 
        changed((prevState) => {
            return { ...prevState, amount: event.target.value };
        });
    };

    const DatechangeHandler = (event) => {
        // Datechanged(event.target.vaule);
        changed((prevState) => {
            return { ...prevState, date: event.target.value };
        });
    };

    // alternative for the having all change handler functions in one function
    //identifier is not key word  you can you use any name  77 lecture around
    /*const AllchangeHandler = (identifier, event) =>
        {
        if (identifier == 'title') {
            changed((prevState) => {
                return { ...prevState, title: event.target.value };
            });
        }
        else if (identifier == 'amount') {
            changed((prevState) => {
                return { ...prevState, amount: event.target.value };
            });
        }
        else {
            changed((prevState) => {
            return { ...prevState, date: event.target.value };
        }); }
        
        };*/
  
 
    const SubmitHandler = (event) =>
    {
        event.preventDefault();

        // this title:     input.title        we change to Titlechanged if old sybtax is used
        // this below wntered formdata is there just in the console to check
        const formdata =  {
            title: input.title ,
            amount: input.amount,
            date : new Date( input.date)      
        };                    
       // console.log(formdata);
        // this onSave is in the other component NewExpensedata  which  taking function as prop
        props.onSave(formdata);

        // this changed of ({ title: "", amount: "", date: "" }) will change to Titlechanged('')
        changed({ title: "", amount: "", date: "" });
        
         };
    
    
    return (
        <form  onSubmit={SubmitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>title</label>
                    {/*if we use the all event  AllchangeHandler   */ }       
                    {/*<input type="text"  onChange={(event) => AllchangeHandler('title',event.target.value)} /> */}
                   
                    <input type="text"  value={input.title } onChange={TitlechangeHandler} />

                
                
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  value={input.amount } onChange={AmountchangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  min="2019-01-01"  max="2024-01-01"  value={input.date } onChange={DatechangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
