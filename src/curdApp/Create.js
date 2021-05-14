import React, {useEffect, useState} from 'react';

import Header from '../components/Header';
import { Footer } from '../components/Footer';
export const Create = () => {
    const[inputs, SetInput]= useState({
        firstName:"",
        lastName:"",
        email:"",
        age:"",
        gender:"",
        state:"",
        city:"",                                                            
    });
    const [error, setError] = useState(inputs);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        handleValidate(inputs)
    },[inputs])
    const{firstName,lastName,email,age,gender,state,city}= inputs; 
   const handleSubmit = (event) =>{       
    event.preventDefault()
    // alert("SUBMITTED");
    
    //    if(!firstName || !lastName || !email || !age || !gender || !state || !city){
    //        return;
    //    }
      
       setSubmitted(false);
       if (handleValidate(inputs)){
           setLoading(false);
           localStorage.setItem("inputs", JSON.stringify(inputs))
           SetInput ({ firstName:"", lastName:"", email:"",age:"", gender:"", state:"",city:""});
         
           
       }
   }
   function onChange(e){
    SetInput({...inputs,[e.target.name]:e.target.value})
      //  const {name, value} = e.target;
      //  SetInput ((inputs) => ({...inputs,[name]:value}));
      
       console.log(e.target.value)
   }
   const handleValidate = (inputs) => {
    let error = {};
    let isValid = true;
    if (typeof inputs["email"] !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(inputs["email"])) {
        isValid = false;
        error["email"] = "Please enter valid email address.";
      }
    }
    if (!inputs["email"]) {
      isValid = false;
      error["email"] = "Please enter email address.";
    }
    if(typeof inputs["firstName"] !== "undefined"){
        let pattern = new RegExp('^[a-zA-Z]+$');
        if(!pattern.test(inputs["firstName"])){
            isValid=false;
            error["firstName"]="please enter character";
        }
        else if(inputs["firstName"].length <=2 ) {
            isValid=false;
            error["firstName"]="max 3 words";
        }
    }   
    
    if (!inputs["firstName"]) {
        isValid = false;
        error["firstName"] = "Please enter firstName .";
      }
      if(typeof inputs["lastName"] !== "undefined"){
        let pattern = new RegExp('^[a-zA-Z]+$');
        if(!pattern.test(inputs["lastName"])){
            isValid=false;
            error["lastName"]="please enter character";
        }
        
    }
    // if (typeof values["phone"] !== "undefined") {
    //     var pattern = new RegExp(/^[0-9\b]+$/);
    //     if (!pattern.test(values["phone"])) {
    //       isValid = false;
    //       errors["phone"] = "Please enter valid phone number.";
    //     } else if (values["phone"].length != 10) {
    //       isValid = false;
    //       errors["phone"] = "Please enter valid phone number.";
    //     }
    //   }
    //   if (!values["phone"]) {
    //     isValid = false;
    //     errors["phone"] = "Please enter phone number.";
    //   }
    setError(error);
    return isValid;
  };
 
    return (
        <div>
            <Header />
            <div className="container">
                <form className="myform" onSubmit={handleSubmit}>
                    
                    <div className="form-group" >
                        <label htmlFor="fisrtName">First Name</label>
                        <input type="text" value={firstName} onChange={onChange} className="form-control"  name="firstName"/>
                        {submitted && !!error.firstName && (
            <div className="inline-errormsg">{error.firstName}</div>
          ) }
                    </div>
                    <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                        <input type="text" value={lastName} onChange={onChange} className="form-control" name="lastName"/>
                        {submitted && !!error.lastName && (
            <div className="inline-errormsg">{error.lastName}</div>
          ) }
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                        <input type="text" value={email} onChange={onChange} className="form-control" name="email"/>
                        {submitted && !!error.email && (
            <div className="inline-errormsg">{error.email}</div>
          )}
                    </div>
                    <div className="form-group">
                    <label htmlFor="age">Age</label>
                        <input type="Number" value={age} onChange={onChange} className="form-control" name="age"/>
                        {submitted && !!error.age && (
            <div className="inline-errormsg">{error.age}</div>
          )}
                    </div>
                    <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                        <input type="text" value={gender} onChange={onChange} className="form-control" name="gender"/>
                     
                    </div>
                    <div className="form-group">
                    <label htmlFor="state">State</label>
                        <input type="text" value={state} onChange={onChange} className="form-control" name="state"/>
                        {submitted && !!error.state && (
            <div className="inline-errormsg">{error.state}</div>
          )}
                    </div>
                    <div className="form-group">
                    <label htmlFor="city">City</label>
                        <input type="text" value={city} onChange={onChange} className="form-control" name="city"/>
                        {submitted && !!error.city && (
            <div className="inline-errormsg">{error.city}</div>
          )}
                    </div>
                     <button type="submit" className="btn btn-primary brn-sm">Submit</button>
                </form>
            </div>
            <div className="container">
            <table className="table mt-5">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">State</th>
      <th scope="col">City</th>
    </tr>
  </thead>
  <tbody>
                           
    <tr>
      <th scope="row">1</th>
      <td>{inputs.firstName}</td>
      <td>{inputs.lastName}</td>
      <td>{inputs.email}</td>
      <td>{inputs.age}</td>
      <td>{inputs.gender}</td>
      <td>{inputs.state}</td>
      <td>{inputs.city}</td>
    </tr>
   
  </tbody>
</table>

   </div>               

            <Footer />
        </div>
    )
}
