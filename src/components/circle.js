import React from "react";
import {data} from "../data.js"

export default class Circle extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        
        return(
            <>
                <div className="circle">
                    {this.props.value}
                    {this.props.unit}
                </div>
                <div className="title">
                    {this.props.title}
                </div>
            </>        
        )
    }
}