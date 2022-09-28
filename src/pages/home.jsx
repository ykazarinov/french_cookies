import React from "react";
import Banner from "../components/banner"
import {data} from "../data.js"
export default class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <main>
                <div className = 'container'>
                    <div className="row">
                        <div className="col-12">
                            <Banner />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1>{data.title}</h1>
                            <p>{data.text}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


// import Banner from "../components/banner"
// export default function Home(){
  
//         return(
//             <main>
//                 <div className = 'container'>
//                     <div className="row">
//                         <div className="col-12">
//                             <Banner />
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         )
    
// }