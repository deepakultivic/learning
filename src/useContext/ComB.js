import React, { useContext } from 'react'
import ComC from './comC'
import { Firstname } from './Appdemo'
const ComB = () => {
    const fname= useContext(Firstname);
    return (
        <div>
            my name is {fname}
            <ComC/>
        </div>
    )
}

export default ComB
