import React, { useState } from "react";
// import Cart from "./Cart";
// import '../index.css'

export default function CartItem(props){
    
    
    return (
        <div className=" w-80 h-20 flex flex-row justify-evenly align-items-center">
            <div>
                {props.item.name}
            </div> 
            {/* <p>{props.item.name}</p> */}
            <div>
                {props.item.count}
            </div>
            <div>
                <button className="btn btn-primary mr-2" onClick={()=> props.handleInc(props.item)}>+</button>
                <button className="btn btn-primary mr-2" onClick={()=> props.handleDec(props.item)}>-</button>
                <button className="btn btn-error mr-2" onClick={()=> props.handleDel(props.item)}>
                    Del
                </button>
            </div>

        </div>
    )
}
 