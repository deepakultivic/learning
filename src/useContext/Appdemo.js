import React, { createContext } from 'react'
import ComA from './ComA'
const Firstname = createContext();
console.log(Firstname)
const Appdemo = () => {
   
    return (
        <>
              <Firstname.Provider value={"Deepak"}>
                  <ComA/>
              </Firstname.Provider>
              
        </>
    )   
}

export default Appdemo
export {Firstname}
