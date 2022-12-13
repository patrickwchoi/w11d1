import { useState, useEffect, useRef } from "react";

const Form = ()=>{
    // const [user, setUser] = useState ({
    //     name: "",
    //     email:"",
    //     phoneNumber: "",
    //     phoneType:"",
    //     staff:"",
    //     bio:"",
    //     signUpForEmailNoti: ''
    // })

    const [name, setName] =useState('');
    const [email, setEmail] =useState('')
    const [phoneNumber, setPhoneNumber] =useState('')
    const [phoneType, setPhoneType] =useState('');
    const [staff, setStaff] =useState('instructor')
    // const [student, setStudent] = useState('student')
    const [bio, setBio] =useState('')
    const [signUpForEmailNoti, setSignUpForNoti] =useState('')



    const [errors, setErrors] = useState({

    })

    // const handleChange = (incomingKey)=>{
    //   return e => {
    //     const newObj = Object.assign({}, user, {[incomingKey]: e.target.value})
    //     setUser(newObj)
    //   }
    // }

    
    const handleSubmit =()=>{
    }
    return (
      <>
       <form onSubmit ={handleSubmit} >
        <label htmlFor="name">Name
          <input type="text" placeholder="name" onChange={(e)=>(setName(e.target.value))} value={name}/>
        </label>
        <br />
        <br />
        <label >Email
          <input type="text" placeholder="email"  onChange={(e)=>(setEmail(e.target.value))} value={email}/>
        </label>
        <br />
        <br />
        <label >Phone Number
          <input type="tel" placeholder="phoneNumber"  onChange={(e)=>(setPhoneNumber(e.target.value))} value={phoneNumber}/>
        </label>
        <br />

        <select value={phoneType} onChange={(e)=>{ 
          console.log(e.target.value)
          setPhoneType(e.target.value)}}>
          <option value="Home" >Home</option>

          <option value="Work">Work</option>
          <option value="Mobile" >Mobile</option>
        </select>
        <br />
        <br />

        <input type="radio" name='role'id='instructor' value={staff} onChange={(e) => {
          console.log(e.target.value)
          setStaff(e.target.value)}}/>
        <label htmlFor='instructor'>Instructor</label>
        <input type="radio" name='role' id='student' value={staff}
          onChange={(e) => {
          console.log(e.target.value)
          setStaff(e.target.value)}} />
        <label htmlFor='student'>Student</label>
        <br />
        <textarea placeholder="bio">Bio</textarea>
        <br />
        <input type="checkbox" id='signUp' />
        <label for='signUp'>Sign Up for Notification</label>
        <br />
        <button type='submit'>Submit</button>
       </form>
      </>
    )
}
export default Form