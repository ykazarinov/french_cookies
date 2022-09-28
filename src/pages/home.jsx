import React from "react";
import Banner from "../components/banner"
import Stars from "../components/stars"
import Circle from "../components/circle"
import Table from "../components/table"
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
                            <h2>{data.overview.subTitle}</h2>
                        </div>
                        <div className="col5">
                            <Stars />
                        </div>
                        <div className="col5">
                            <Circle 
                                value={data.overview.cost.value} 
                                unit={data.overview.cost.unit} 
                                title={data.overview.cost.title} 
                            />
                        </div>
                        <div className="col5">
                            <Circle 
                                value={data.overview.prepTime.value} 
                                unit={data.overview.prepTime.unit} 
                                title={data.overview.prepTime.title} 
                            />
                        </div>
                        <div className="col5">
                            <Circle 
                                value={data.overview.cookTime.value} 
                                unit={data.overview.cookTime.unit} 
                                title={data.overview.cookTime.title} 
                            />
                        </div>
                        <div className="col5">
                            <Circle 
                                value={data.overview.restingTime.value} 
                                unit={data.overview.restingTime.unit} 
                                title={data.overview.restingTime.title} 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2>{data.ingredients.subTitle}</h2>
                        </div>
                        <div className="col-12">
                            <Table />
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