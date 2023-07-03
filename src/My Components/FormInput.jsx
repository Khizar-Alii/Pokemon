import React, { useState } from 'react'  
import './FormInput.css'

const FormInput = (props) => {
    const {label , errorMessage , onChange , id , ...inputProps} = props;
    const [focused , setFocused] = useState(false);
    const handleFocus = (e) =>{
      setFocused(true)
    }
  return (
    <div className='formInput'>
        <label> {label} </label> 
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} 
         onFocus={()=> inputProps.name==='confirmpassword' && setFocused(true)}  focused = {focused.toString()}/>
        <span className='formErrorMessage'>{errorMessage}</span>
       
    </div>
  )
}

export default FormInput
