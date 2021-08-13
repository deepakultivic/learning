import React,{useState , useEffect} from "react";
import Menu from "../Jsonfiles/menu";
import './style.css'


const allcatvalues = [...new Set(Menu.map((elem) =>elem.category)
),"all"]
//  console.log(allcatvalues);

const Filtertodo = () => {
     const [item, setItem] = useState(Menu);
     const [catevalue, setcateValue] = useState(allcatvalues)
     
     const filteritems = (cate_item) =>{

        if(cate_item === "all"){
            setItem(Menu)
            return
        }
        const updateditems = Menu.filter((elem)=>{
                return elem.category === cate_item;
        });
        setItem (updateditems);
     }
  
  return (
    <>
      <div className="container">
        <div className="menu_bar">
            {
               catevalue.map((elem,index) => {
                     return  <button className="btn btn-warning" key={index} onClick={()=>filteritems(elem)}>{elem}</button>
               })
            }
          {/* <button className="btn btn-warning" onClick={()=>setItem(Menu)}>All</button>
     
          <button className="btn btn-warning" onClick={()=>filteritems('lunch')}>Lunch</button>
          <button className="btn btn-warning" onClick={()=>filteritems('evening')}>Evening</button> */}

        </div>
        <div className="row">
          {
              item.filter((item, index) => index < 6).map((elem,index)=>{
                  const{name,price,image}= elem;
                  return(
                    <div className="col-md-4" key={index}>
                    <article>
                      <figure>
                        <img src={image} className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" alt="image" />
                      </figure>
                      <div className="grid_content">
                        <h3 className="name_cate">{name}</h3>
                        <div className="price">
                          <p>{price}</p> <button>Order now</button>
                        </div>
                        <p className="info">Price may vary on selected date</p>
                      </div>
                    </article>
                  </div>
                  )
              })

          }
        </div>
      </div>
    </>
  );
};

export default Filtertodo;
