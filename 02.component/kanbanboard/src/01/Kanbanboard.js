import React from 'react';
import cards from './data.json';
import './assets/styles.css';
import CardList from './CardList'

export default function() {
    console.log(cards);

    const a = cards.filter((card) => card.status === 'ToDo')
    console.log(a);
    return (
        <div className='kanbanboard'>
            {/*
            <CardList key='ToDo' cards={cards.filter((card) => card.status === 'ToDo')}/>
            <CardList key='Doing' cards={cards.filter((card) => card.status === 'Doing')}/>
            <CardList key='Done' cards={cards.filter((card) => card.status === 'Done')}/>
            */}
        </div>
    )
}