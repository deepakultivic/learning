import React, { useState,useEffect } from 'react';
import Header from '../components/Header';
import {Footer} from '../components/Footer';
import {Create} from '../curdApp/Create';
export const Read = () => {

const [value, setvalue] = useState(
  {

  }
)
  let initValue;
  if(localStorage.getItem("inputs") ===null ){
      initValue = []; 
  }
  else{
      initValue = JSON.parse(localStorage.getItem("inputs"));
      console.log(localStorage);
  }


    return (
    
        <div>
                <Header/>
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
      <td>{value.firstName}</td>
      <td>{value.lastName}</td>
      <td>{value.email}</td>
      <td>{value.age}</td>
      <td>{value.gender}</td>
      <td>{value.state}</td>
      <td>{value.city}</td>
    </tr>
   
  </tbody>
</table>

   </div>
            <Footer/>
        </div>
    )
}
