import React, { useState} from "react";
import Items from "./components/ExpenseItemFirstCom";
import NewExpenses from  "./components/NewExpense/NewExpensesItem";
import ExpensesFilter from "./components/NewExpense/ExpenseFilter";


const expenseslist = [
  {
    id: "e1",
    title: "Papers",
    amount: 94.90,
    date: new Date(2023, 2, 12)
  },
  {
    id: "e2",
    title: "Books",
    amount: 7000.90,
    date: new Date(2023, 1, 1)
  },
  {
    id: "e3",
    title: "system",
    amount: 11000.90,
    date: new Date(2022, 6, 3)
  }
];

function  App() {

  const [expenses, updated_expenses] = React.useState( expenseslist );
  const [selectedYear, setSelectedYear] = useState('2022');
  
  const addExpense = expense => {
    console.log("IN App.js");
    console.log(expense);
    updated_expenses(prevState => [...prevState, expense]);
  };
  
  const HandelerSaved = (parameter) => {
    const year = parameter;
    console.log("in App.js");
    console.log(year);
    setSelectedYear(parameter)
  };

  const filter_year = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  
  
  return (
    <div>
      <NewExpenses saved={addExpense}  />
      <ExpensesFilter saved2={HandelerSaved} />    
      { filter_year.map((expense) => (<Items key={expense.id} product={expense} />))  }

    </div>
  ); 
};

export default App;
