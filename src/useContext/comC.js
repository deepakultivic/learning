import React from 'react'
import { Firstname } from './Appdemo'
const ComC = () => {
    return (
        <div>
            <Firstname.Consumer>
                {
                    (fname)=>{
                        console.log(fname);
                        return(
                           <>
                            <h2>my name is {fname}</h2> 
                           </>
                          
                        );
                    }
                }
            </Firstname.Consumer>
           
        </div>
    )
}

export default ComC
