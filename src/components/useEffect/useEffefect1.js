import React,{useState,useEffect} from 'react'

const UseEffefect1 = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if(count >=1)
   {
    document.title =`Chat (${count})`;
   }
   else{
    document.title =`Chat`; 
   }
    })
    return (
        <div>
                <div className="p-5 btn-bg text-center">
                    <h2>{count}</h2>
                    <button onClick={()=>setCount(count+1)} className="btn btn-success">CLick me</button>
                </div>
        </div>
    )
}

export default UseEffefect1
