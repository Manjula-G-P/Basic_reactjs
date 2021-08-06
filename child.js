import React from "react"
function Child(props){
    const child="I am a child"
    return(
        <div>
            <h3>parent component:{props.Func(child)}</h3>
            <h3>Child Component:{props.name}</h3>
            {/* <h3>{props.Func(child)}</h3> */}
        </div>

    )
}
export default Child

