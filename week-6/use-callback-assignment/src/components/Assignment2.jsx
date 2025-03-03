import React from 'react'
import { useRef } from 'react';
import { useMemo } from 'react';
import { useState } from 'react'

const Assignment2 = () => {

    const itemInput = useRef(null);
    const priceInput = useRef(null);

    const [items,setItems] = useState([
        {name:"Chocolates",value:10},
        {name:"Chips",value:20},
        {name:"Onion",value:30},
        {name:"Tomato",value:40},
    ]);


    const addItems = ()=>{
        const item = itemInput.current.value;
        const price = parseInt(priceInput.current.value);
        setItems([...items,{name:item , value:price}])
        itemInput.current.value = "";
        priceInput.current.value = "";
    }

    const totalValue = useMemo(()=>{
        // let total = 0;

        // for(let i=0;i<items.length;i++){
        //     total +=items[i].value
        // }
        // return total;

        return items.reduce((acc, curr) => acc + (curr.value || 0), 0);// slightly cool way to do things
    },[items]);
    return (
    <div>
        
        <div>
            <h1>Grocery Store</h1>
            <input ref={itemInput} type="text" placeholder='Enter The Item'/>
            <input ref={priceInput} type="text" placeholder='Enter the Price'/>
            <button onClick={addItems}>Add to Cart</button>
        </div>


        <ul>
            Grocery Bill
            {items.map((items,index)=>{
                return (
                    <li key={index}>
                        {items.name} - ₹{items.value}
                    </li>
                )
            })}
        </ul>
        <p>total: {totalValue}</p>
    </div>
  )
}

export default Assignment2