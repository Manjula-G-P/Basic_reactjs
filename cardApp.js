import React,{useState}from "react"
import Card from "../cardcomponent/card"
import "./cardApp.css"

function CardApp(){
    const[name,setName]=useState("Manu")
    const[job,setJob]=useState("Software Engineer")
    const[about,setabout]=useState("I am fresher and have no work experience in any company. My strength is that I can adapt quickly to any environment. My short-term goal is to get placed in a reputed company like yours, which will allow me to enhance my skills and Knowledge. My long term goal would be to reach a higher position in your company..")
    
    return(
        <div className="CardApp">
            <Card 
            name={name}
            job={job}
            about={about}/>
        </div>
    )
}
export default CardApp