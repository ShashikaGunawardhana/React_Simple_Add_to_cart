import React from 'react';

export default function Header(props){
const {countCartItems}=props;
    return (
        <header className='row block center'>
            <div>
                <a href="">
                    <h1>Sample Shopping Cart</h1>
                </a>
            </div>
            <div>
         
            <div>
                <a href="#/cart">
                    Cart{' '}
                    {countCartItems? (
                    <button className='badge'>{countCartItems}</button>
                    ):(
                        ''
                        )

                }
                </a>{' '} 
                </div>   
            </div>
        </header>
    );
}