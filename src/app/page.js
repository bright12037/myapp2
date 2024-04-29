'use client'
import react from "react";
import './mycss.css' 
import Comp1 from "./components/Comp1";


const page = () =>{

  return (
    <div>
      <body>
             <Comp1  home="myhome" />
            <div className="maindiv">
                <h1>my very first react project</h1>
                <p>lorem</p>
            </div>
      </body>
    </div>
  )
}
export default page 