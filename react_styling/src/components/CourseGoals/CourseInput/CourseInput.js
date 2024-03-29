import React, {useState }  from  'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
import styled from 'styled-components'



// const FormControl = styled.div `

// margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color :  ${(props) => (props.prop_element ? 'red': '')};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${(props) => (props.prop_element? 'red' : '#ccc')};
//   background : ${(props) => (props.prop_element? '#ffd7d' : 'transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// `


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid, setIsvalid] = useState(true);
  
  
  const goalInputChangeHandler = event => {
    if (enteredValue.trim().length > 0) {
      setIsvalid(true);
    
    }
   
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsvalid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/*<div className= {`form-control ${!isvalid? 'invalid':''}` > }*/}
      {/*<FormControl   prop_element = { !isvalid }   > */}
            {/*  these are the inline styles that we are not using now in the below  */}
            {/*  <label style={{color :!isvalid? 'red': 'black'}}      >Course Goal</label>
              <input style={{ borderColor : !isvalid? 'red': 'black' , background :!isvalid? 'salmon': 'transparent'   }} type="text" onChange={ goalInputChangeHandler } /> */}
      <div className= {`${styles['form-control']}  ${!isvalid  && styles.invalid } ` }  >
 
        <label>  Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
 
      </div>
      {/*</FormControl> */}
      
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
