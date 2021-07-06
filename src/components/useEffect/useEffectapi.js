import React, { useEffect, useState } from "react";
import "./style.css";
import Loader from "../github/loader";
const UseEffectapi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const getUsers = async () => {
    try{
        setLoading(false);
        const response = await fetch(" https://api.github.com/users?since=XXX");

        setUsers(await response.json());
    }
    catch(error){
        setLoading(false);
            console.log("my error is" + error)
    }
 
  };

  useEffect(() => {
    getUsers();
  }, []);
if(loading){
    return<Loader/>
}
  return (
    <div>
      <div className="grid_line">
        <div className="container">
          <div className="row">
            {users.map((curElem, idex) => {
              return (
                <div className="col-md-4" key={idex}>
                  <div className="grid_inner">
                    <div className="imge_sec">
                      <img src={curElem.avatar_url} alt="" />
                    </div>
                    <div className="grid_content">
                      <p className="user_name">{curElem.login}</p>
                      <div className="user_info">
                        <div className="info_grid">
                          <p className="art">Article</p>
                          <p className="art_number">38</p>
                        </div>
                        <div className="info_grid">
                          <p className="art">Followers</p>
                          <p className="art_number">980</p>
                        </div>
                        <div className="info_grid">
                          <p className="art">Rating</p>
                          <p className="art_number">4.5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseEffectapi;
