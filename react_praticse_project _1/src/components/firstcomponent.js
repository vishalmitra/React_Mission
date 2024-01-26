import React from "react";

const  Component = (props)=>  {
    
    return <>
       
         <img scr={props.image } alt={props.title } />
         <h2>{props.title}</h2>
         <p>{props.description}</p>
       

   
    </>  ;
};

export  default  Component;