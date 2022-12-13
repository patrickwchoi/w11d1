import { useState, useEffect, useRef } from "react";

const Form = ()=>{
    const [user, setUser] = useState ({
        name: "",
        email:"",
        phoneNumber: "",
        phoneType:"",
        staff:"",
        bio:"",
        signUpForEmailNoti: false
    })

    const [errors, setErrors] = useState({

    })

    const handleChange = (incomingKey)=>{
      return e => {
        const newObj = Object.assign({}, user, {[incomingKey]: e.target.value})
        setUser(newObj)
      }
    }

    
    const handleSubmit =()=>{
    }
    return (
      <>
       <form onSubmit ={handleSubmit}>
        <input type="text" placeholder="name" onChange={handleChange('name')} value={user.name}/>
        <input type="text" placeholder="email"  onChange={handleChange('email')} value={user.email}/>
        <input type="text" placeholder="phoneNumber"  onChange={handleChange('phoneNumber')} value={user.phoneNumber}/>
        <input type="text" placeholder="phoneType"  onChange={handleChange('phoneType')} value={user.phoneType}/>
        <input type="text" placeholder="staff"  onChange={handleChange('staff')} value={user.staff}/>
        <input type="text" placeholder="bio"  onChange={handleChange('bio')} value={user.bio}/>
        <input type="text" placeholder="signUpForEmailNoti"  onChange={handleChange('signUpForEmailNoti')} value={user.signUpForEmailNoti}/>
       </form>
      </>
    )
}
export default Form