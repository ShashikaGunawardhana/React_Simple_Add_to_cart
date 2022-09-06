import React from 'react';

export default function Basket(props){
 const{cartItems,onAdd,onRemove}=props;
 const itemPrice= cartItems.reduce((a, c)=>a + c.price*c.qty,0);
 const taxPrice=itemPrice*0.14;
 const shippingPrice=itemPrice < 2000 ? 0 :10;
 const taotalPrice=itemPrice+taxPrice+shippingPrice;


    return <aside className='block col-1'>
        <h2>Cart Item</h2>
        <div>{cartItems.length ===0 && <div>Cart Is Empty</div>}</div>
          {cartItems.map((item)=>(
            <div key={item.id} className='row'>
                <div className='col-1'>{item.name}</div>
                <div className='col-1'>
                    <button onClick={() => onAdd(item) } className='add'>
                        +
                    </button>
                    <button onClick={() => onRemove(item) } className='remove'>
                        -
                    </button>
                </div>
                <div className='col-2 text-right' >
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
            
          ))}
          {cartItems.length !== 0 && (
            <>
             <hr></hr>
             <div className='row'>
                <div className='col-1'>Item Price</div>
                <div className='col-1 text-right'>${itemPrice.toFixed(2)}</div>    
             </div>
             <div className='row'>
                <div className='col-1'>Tax price</div>
                <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>    
             </div>
             <div className='row'>
                <div className='col-1'>Shipping Price Price</div>
                <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>    
             </div>
             <div className='row'>
                <div className='col-1'>Total Price</div>
                <div className='col-1 text-right'><strong>${itemPrice.toFixed(2)}</strong></div>    
             </div>
             <hr></hr>
             <div className='row'>
                <button onClick={() => alert('Implinemt Checkout')}>Checkout</button>
             </div>
            </>
          )}
    </aside>
}