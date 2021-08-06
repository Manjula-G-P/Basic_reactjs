import React from "react"
import Child from "./child"

function Parent(){
    function Child_com(text){
        return text;
    }
    const parent="I am a parent"
    return(
        <div>
            <h3><Child Func={Child_com} name={parent}/></h3>
        
        </div>
    )
}
export default Parent