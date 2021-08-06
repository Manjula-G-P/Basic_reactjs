import React ,{Component} from "react"
//using function components
// function Car(props){
//     return(
//         <div>
//             <h1>my self {props.name}</h1>
//             <p>hello every one ,as u know am leanring here {props.course}</p>
//         </div>
//     )

// }
// export default Car

//using class componensts

class Car extends Component{
    render(){
        return(
        <div>
            <h1>my self {this.props.name}</h1>
            <p>hello every one ,as u know am leanring here {this.props.course}</p>
            
        </div>
        )
    }
}
export default Car