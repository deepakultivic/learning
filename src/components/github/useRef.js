import React,{useRef,useState} from 'react'

const UseReff = () => {
    const myvalue= useRef(null);
    const [show, setShow] = useState(false)
    const submit = (e)=>{
        e.preventDefault();
        const name = myvalue.current.value;
        name===""? alert("fill the value"): setShow(true);
        // console.log(myvalue.current.value)
    }
  
    return (
        <React.Fragment>
            <form onSubmit={submit}>
            <div className="input-group">
                <input type="text" ref={myvalue} />
                
            </div>
            <button type="submit">Submit</button>  
            </form>
            <div>
                
                <p>{show ? `your lucky name is ${myvalue.current.value}`:""}</p>
            </div>
        </React.Fragment>
    )
}

export default UseReff
    