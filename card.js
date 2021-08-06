import React,{useState} from "react"
import "./card.css"
// function Card({imgurl,title,body,name}){

//     return(
//         <div className="card-container">
//             <center>
//             <div className="upper-container">
//                 <div className="imgcontainer">
//                     {/* <img src={imgurl} alt='pic'></img> */}
//                 </div>
            
//             </div>
//             </center>
//             <div className="lower-container">
//                 <h3>{name}</h3>
//                 <h4>{title}</h4>
//                 <p>{body}</p>
//                 <button>visit profile</button>
//                 
//             </div>
        
//         </div>
    
//     )
// } 
// export default Card
function Card({name,job,about}){
    
    
    return(

        <div className="card-container">
            {/* <center> */}
            {/* <center> */}
            <div className="upper-container">
                <div className="imgage-container">
                    <img src="/images/manupic.jpeg" height="100px" width="100px" alt='pic'></img>
                </div>
            
            </div>
            {/* </center> */}
            <div className="lower-container">
                <h3>{name}</h3>
                <h4>{job}</h4>
                <p>{about}</p>
                <button>visit profile</button>
                {/* <div className="title-container">
                    <h3>{title}</h3>
                </div>
                <div className="body-container">
                    <p>{body}</p>
                </div>
                <button>view profile</button> */}
            </div>
        {/* </center> */}
        </div>
    
    )
} 
export default Card