import React from 'react';
import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  const [unchanged, changed] = React.useState({ "Year":'2022'} );   
    
  const HandelYear = (event) => {
    const value = event.target.value;
    changed((prevState) => {
      return { Year: value };
    });
    props.saved2(value);

  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={unchanged.Year} onChange={HandelYear}  >
          <option value='2019'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select  >
       
      </div>
    </div>
  );
};
export default ExpensesFilter;