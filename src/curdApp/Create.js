import React, {useState} from 'react';

import Header from '../components/Header';
import { Footer } from '../components/Footer';
export const Create = () => {
    const[inputs, SetInpput]= useState({
        firstName:"",
        lastName:"",
        email:"",
        age:"",
        gender:"",
        state:"",
        city:"",                                                            
    });
    const{firstName,lastName,email,age,gender,state,city}= inputs; 
   const handleSubmit = () =>{
       if(!firstName){
           return;
       }
   }
   const onChange = (e) =>{
    e.preventDefault()
    console.log(e.target.value);
            // SetfirstName(e.target.value);         
   }
    return (
        <div>
            <Header />
            <div className="container">
                <form className="myform" onSubmit={handleSubmit}>
                    
                    <div className="form-group" >
                        <label htmlFor="fisrtName">First Name</label>
                        <input type="text" value={firstName} onChange={onChange} className="form-control"  id="firstName"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                        <input type="text" value={lastName} onChange={onChange} className="form-control" id="lastName"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                        <input type="text" value={email} onChange={onChange} className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="age">Age</label>
                        <input type="Number" value={age} onChange={onChange} className="form-control" id="age"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                        <input type="text" value={gender} onChange={onChange} className="form-control" id="gender"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="state">State</label>
                        <input type="text" value={state} onChange={onChange} className="form-control" id="state"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="city">City</label>
                        <input type="text" value={city} onChange={onChange} className="form-control" id="city"/>
                    </div>
                     <button type="submit" className="btn btn-primary brn-sm">Submit</button>
                </form>
            </div>


            <Footer />
        </div>
    )
}
