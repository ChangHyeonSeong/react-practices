import React, { Component } from 'react';
import ListItem from './ListItem';

/**key={food.no} -> 리액트가상돔이 사용하는 key  */
export default function FoodList({foods}) {
    return (
         <ul>
            { foods.map((food) => <ListItem 
                                        key={food.no}                
                                        name={food.name} 
                                        quantity={food.quantity} />) }
        </ul>
    )
}
