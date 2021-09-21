import React from 'react'
import { useState } from 'react';
import './App.css';

function App() {

// const [ firstName, setFirstName ] = useState('')
// const [lastName, setLastName] = useState('')
// const [email, setEmaile] = useState('')
 const [values, setVaules] = useState({
   firstName: "",
   lastName: "",
   email: "",
 })

 const [toggle, setToggle] = useState(false)

 console.log(values)

function handleChangeFirstName(e){
  setVaules({ ...values, firstName: e.target.value })
}

function handleChangeLastName(e) {
    setVaules({...values, lastName: e.target.value})
}

function handleChangeEmail(e) {
  setVaules({ ...values, email: e.target.value })
}

function handleSubmit(event){
  console.log("submitting")
  if(!values.firstName || !values.lastName || !values.email){
    setToggle(true)
  }
  event.preventDefault();

}


  return (
    <>
    <form className="register "onSubmit={handleSubmit}>
        {toggle ? <span className="alert">Please fill the form completely</span> : null}
      <h1>Sign Up</h1>
      <input
       type=''
       id='first-name'
       placeholder="First Name"

       required
       onChange={handleChangeFirstName}
      />
        <input
        type=''
        id='last-name'
        placeholder="last Name"
        onChange={handleChangeLastName}
        required
       />
        <input
          type=''
          id='email'
          placeholder="Email"
          onChange={handleChangeEmail}
          required
        />
      <button type="submit" className="submit">
        Submit</button>
    </form>
    </>
  );
}

export default App;
