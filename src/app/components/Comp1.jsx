import react from "react";
import {useState } from "react";



const Comp1 = (props) =>{
    const [Show, setShow] = useState(false)

    const shownavbar = () => {
        setShow(!Show)
    }

    return (
        <div >
             <nav>
                <button className="Navbutton" >Icon</button>
                <div>
                    <ul className="navlist">
                        <div>
                            <li onClick={shownavbar} >Home</li>
                            {Show === false ? (true) : (<div>
                                                            <ul className="navlist2">
                                                                <li>home: {props.home}</li>
                                                                <li>Admission</li>
                                                                <li>choose</li>
                                                                <li>Name</li>
                                                            </ul>
                                                        </div>)}
                        </div>
                        <li>Services</li>
                        <li>Careers</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    </div>
                    
             </nav>
        </div>
    )
}
export default Comp1