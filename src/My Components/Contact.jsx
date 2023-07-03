import React, { useState } from 'react';
import './Contact.css';
import FormInput from './FormInput';

function Contact() {
  const [values , setValues] = useState({
    username : '',
    email : '',
    birthday : '',
    password : '',
    confirmpassword : ''
  });
  const inputs = [
    {
      id : 1,
      name : 'username' , 
      type : 'text' ,
      palceholder : 'username',
      label : 'username',
      errorMessage : "username should be 3-16 characters and shouldn't include special characters!",
      required : true,
      pattern : "^[A-Za-z0-9]{3,16}$"
    },
    {
      id : 2,
      name : 'email' , 
      type : 'email' ,
      palceholder : 'email',
      label : 'email',
      errorMessage : 'Email should be a valid email address',
      required : true
    },
    {
      id : 3,
      name : 'birthday' , 
      type : 'date' ,
      palceholder : 'birthday',
      label : 'birthday',
      errorMessage : ''
    },
    {
      id : 4,
      name : 'password' , 
      type : 'password' ,
      palceholder : 'password',
      label : 'password',
      errorMessage : "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      required : true,
      pattern : '^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$'
    },
    {
      id : 5,
      name : 'confirmpassword' , 
      type : 'password' ,
      palceholder : 'confirmpassword',
      label : 'confirm Password',
      errorMessage : "Passwords don't match",
      required : true,
      pattern : values.password
    }
  ]
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  const onChange = (e) =>{
    setValues({...values , [e.target.name] : e.target.value})
  }
  console.log(values);
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="submitBtn">Submit</button>
      </form>
    </div>
  );
  
}

export default Contact;
