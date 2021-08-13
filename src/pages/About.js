import React from 'react';
import Header from '../components/Header';
import {Footer} from "../components/Footer";
import { useLocation, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filtertodo from '../deepakTodos/filtertodo';
import Tgclass from '../components/states/tgclass';
const About = () => {
    const location = useLocation();
    const history= useHistory();
    console.log(history);
    const toaste = () =>{
        toast("Wow so easy!");
    }
    return (
        <>
        <Header/>
        <h1>

            Hello {location.pathname.replace("/", "")} Page
        </h1>
            {
                location.pathname == '/about/deepak'
                
                ?
             
                    <p>Hi deepak welecome again</p> : <p>
                        Login to see your files
                    </p>

                  
            }
        <button onClick={ ()=>history.push('/')}>
            home
        </button>
        <button onClick={toaste}>
            log In
        </button>
        <ToastContainer />
                <Filtertodo/>

                <div className="container">
                <Tgclass/>
                </div>
         <Footer/>  
        </>
    );
}
export default About;