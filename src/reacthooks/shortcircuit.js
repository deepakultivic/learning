import React,{useState} from 'react'


const Shortcircuit = () => {
    const [demo, setDemo] = useState("Don");
    return (
        <div>
          <div className="p-5">
                <h1>{demo || "Chauhan"}</h1>
                <h1>{demo && "Singh"}</h1>
          </div>
        </div>
    )
}

export default Shortcircuit
