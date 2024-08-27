import React from 'react'
import ToggleAddToCart from '../components/ToggleAddToCart'

export default function Menu(props) {
    
  return (
    <>
        {/* <div>Menu</div> */}
        {/* <div>

        {
                props.items.map((item)=>{
                    return item.name;
                })
            }
        </div> */}
      <div className='justify-end'>
        <input type='text' onChange={(e)=>props.handleSearch(e.target.value)} className='input input-primary' placeholder='Search . . .'></input>
      </div>
      <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <ToggleAddToCart
                isToggled={item.isInCart}
                handleToggleAddToCart={props.handleToggleAddToCart}
                item={item}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}
