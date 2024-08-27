import CartItem from "./CartItem"
import React, { useState } from "react";

export default function Cart(props){

    

    return (
        <>   
        <div>
            {props.items.map( (item)=> {
                return <CartItem 
                    item={item} 
                    key={item.name} 
                    handleInc = {props.handleInc}
                    handleDec = {props.handleDec}
                    handleDel = {props.handleDel}
                />}
            )}
       
        </div>
        
        <button className={`btn btn-warning btn-sm mx1 px-3 ${props.items.length==0 ? "hidden" : "block"}`}  onClick={()=>handleReset(items)}>Reset</button>
        
        </>
    )
}