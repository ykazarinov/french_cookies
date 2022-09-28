import React from "react";
import {data} from "../data.js"

export default class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {servings: 1}
    }


    render(){

        const moinsServing = () => this.setState({ servings: this.state.servings - 1 })
        
        const plusServing = () => this.setState({ servings: this.state.servings + 1 })
        
        return(
            <>
                <div className="servings_cont">
                    <div className="label">{data.ingredients.servings}</div>
                    <button 
                        id="moins" 
                        onClick={moinsServing}
                        className={this.state.servings === 1 ? 'blocked' : null}
                    >-</button>
                    <div className="count">{this.state.servings}</div>
                    <button id='plus' onClick={plusServing}>+</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            
                            {data.ingredients.tableTitles.map((el, i) => (
                                <th key={'tableTitle' + i}>{el}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.ingredients.ingredients.map((line, j) =>(
                            <tr key={'tableLine' + j}>
                                {Object.entries(line).map((cell, z) =>(
                                    cell[0] === 'quantiy' ? 
                                    <td key = {'tableCell' + z}>{cell[1] * this.state.servings}</td> :
                                    <td key = {'tableCell' + z}>{cell[1]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                   
                </table>
                <div>{data.ingredients.text}</div>
            </>        
        )
    }
}