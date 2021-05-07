import React from 'react';
import Header from '../components/Header';
import {Footer} from '../components/Footer';
export const Read = () => {
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
      <td>Deepak</td>
      <td>Chauhan</td>
      <td>deepak.chauhan@ultivic.com</td>
      <td>23</td>
      <td>Male</td>
      <td>Punjab</td>
      <td>Amritsar</td>
    </tr>
   
  </tbody>
</table>

   </div>
            <Footer/>
        </div>
    )
}
