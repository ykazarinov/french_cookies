import React from "react";
import {data} from "../data.js"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons'

export default class Stars extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        let starsCount = 5;
        let arr = [];
        let wholePart = Math.trunc(data.overview.difficulty.value)
        let fractionalPart = Number('0.' + String(data.overview.difficulty.value).split('.')[1])
        let lastPart = Math.trunc(starsCount - data.overview.difficulty.value)
        for(let i = 0; i<wholePart; i++){
            arr.push(1)
        }
        if(fractionalPart){
            arr.push(0.5)
        }
        for(let i = 0; i<lastPart; i++){
            arr.push(0)
        }

        return(
            <>
                <div className="stars_cont">
                    {arr.map((el, index) => (
                        el === 1 ? <FontAwesomeIcon icon={faStar} key={'star' + index} /> :
                        el === 0.5 ? <FontAwesomeIcon icon={faStarHalfStroke}  key={'star' + index} /> :
                        el === 0 ? <FontAwesomeIcon icon={faRegularStar}  key={'star' + index} /> : null
                    ))}
                </div>  
                <div className="title">
                        {data.overview.difficulty.title}
                </div>  
            </>    
        )
    }
}