import React from "react";
import {data} from "../data.js"

export default class Banner extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        
        return(
            <>
            <img src={data.image} alt="Banner" className="banner" />
            </>        
        )
    }
}


// import {data} from "../data.js"

// export default function Banner(){
   
        
//         return(
//             <>
//             {/* <img src={data.image} alt="Banner" className="banner" /> */}
//             </>        
//         )
  
// }