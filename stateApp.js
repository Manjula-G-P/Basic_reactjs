import React,{Component} from "react"
// import HelloReact from "./components/state"
// import State from "./components/state"
// class Sta extends Component{
//     constructor() 
//     {
//         super()
//         this.state={meassage:"Welcome to home page"}
//     }
//     changeMessage() {
//         this.setState({
//             meassage:"Thank you for subscribe"
//         })
//     }
//     render(){
//         return(
//         <div>
//             <h1>{this.state.meassage}</h1>
//             <button onClick={() => this.changeMessage()}>Subscribe</button>
//         </div>
//         )
//     }

// }
// export default Sta

//exaqmple 2
import HelloReact from "../src/components/state"

class Helloapp extends Component{
    constructor(){
        super();
        this.state={isdisplayed:true};
        
    }
    toggleShowhide=()=>
    {
        this.setState({ isdisplayed: !this.state.isdisplayed });
    }
    render(){
        return(
            
            <div>
                <h1>How to hide and show element</h1>
                <h3>React JS Component</h3>
                <hr/>
                <button onClick={()=>this.toggleShowhide()} type="button">{this.state.isdisplayed?"Hide":"show"}</button>
                {this.state.isdisplayed ? <HelloReact/> : null}
            </div>
        )
    }
}
export default Helloapp
