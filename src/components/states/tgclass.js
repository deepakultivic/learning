import React,{useState} from 'react'

const Tgclass = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
    return (
        <div className={isActive ? "app" : "container"}>
        <h1>Hello react</h1>
        <button onClick={handleToggle}>Toggle class</button>
      </div>
    )
}

export default Tgclass
