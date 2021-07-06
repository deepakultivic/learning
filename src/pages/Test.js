import React, { useState } from "react";
import Todo from "../reacthooks/Todo";
import Shortcircuit from "../reacthooks/shortcircuit";
import Basicform from "../reacthooks/basicform";
import UseEffefect1 from "../components/useEffect/useEffefect1";
import UseEffect2 from "../components/useEffect/useEffect2";
import UseReff from "../components/github/useRef";
function Test() {
  const [count, setCount] = useState(0);
  const [myName, setmyName] = useState("Deepak");
  const onChange = () => {
    setCount(count + 1);
  };
  const onToggle = () => {
    let val = myName;
    //   if(val==='Deepak'){
    //       setmyName('Depak chauhan')
    //   }
    //   else{
    //       setmyName('Deepak')
    //   }
    val === "Deepak" ? setmyName("Deepak chauhan") : setmyName("Deepak");
  };
  const bioData = [
    {
      id: 0,
      name: "deepak",
      age: 27,
    },
    {
      id: 1,
      name: "Sahil",
      age: 27,
    },
    {
      id: 2,
      name: "aman",
      age: 27,
    },
  ];
  const [data, setData] = useState(bioData);
  const cleararray = () => {
    setData([]);
  };
  // speread operator
  const [myObject, setmyObject] = useState({
    name: "sahil",
    age: 45,
  });
  const changeName = () => {
    setmyObject({ ...myObject, name: "rinku" });
  };
  return (
    <div className="container">
      <div className="outer p-5">
        <h2>{count}</h2>
        <button onClick={onChange} className="btn btn-danger">
          click
        </button>
        <h2>{myName}</h2>
        <button onClick={onToggle} className="btn btn-danger">
          click
        </button>
      </div>
      <div className="p-5">
        {data.map((items, index) => {
          return (
            <div key={index}>
              <h2
                style={{
                  borderRadius: "10px",
                  background: "#DDD",
                  border: "1px solid blue",
                  textAlign: "center",
                }}
              >
                {items.name}
              </h2>
            </div>
          );
        })}
        <button className="btn btn-primary" onClick={cleararray}>
          Clear
        </button>
        <h2></h2>
      </div>
      <div className="p-5">
        <h2>
          Name:{myObject.name} Age:{myObject.age}{" "}
        </h2>
        <button onClick={changeName}>Change Name</button>
      </div>
      <Todo />
      <Shortcircuit />
      <Basicform/>
      <UseEffefect1/>    
      <UseEffect2/>      
      <UseReff/>         
    </div>
  );
}

export default Test;
