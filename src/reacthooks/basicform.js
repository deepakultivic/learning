import React, { useState } from 'react'

const Basicform = () => {
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [allentry, setAllentry] = useState("")
// const newValue =(e) =>{
//     setEmail(e.target.value);
//     setPassword(e.target.value);
    
// }
const submitForm =(event)=>{
    event.preventDefault();
   if(email && password){
    const newEntry= {email:email,password:password}
    setAllentry([...allentry,newEntry]);
    console.log(newEntry)
    setEmail("");
    setPassword("");
   }
}
    return (
        <div>
            <form className="py-5" onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="exampleInputEmail1"  />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Basicform
