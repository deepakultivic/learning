import React,{useState, useEffect} from 'react'

const useEffect2 = () => {
    const [windowsize, setWindowsize] = useState(window.screen.width)
    const actualwidth =()=>{
        setWindowsize(window.innerWidth)
        console.log()
    }
    useEffect(() => {
            // setWindowsize(window.innerWidth);
            window.addEventListener("resize", actualwidth);
            return(
                window.removeEventListener("resize",actualwidth)
            )
    })
    return (
        <div>
            <div className="p-5 text-center">
                    <p>the actual size of the window is</p>
                    <h2>{windowsize}</h2>
            </div>
        </div>
    )
}

export default useEffect2
