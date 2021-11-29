import React from 'react';
import GuestbookAddForm from './GuestbookAddForm'
import GuestbookList from './GuestbookList';
import guestbooks from './assets/json/data.json';
import './assets/css/styles.css';

export default function() {
    return (
        <div className='Guestbook'>
          <h1>방명록</h1>
          <GuestbookAddForm />
          <GuestbookList guestbooks= {guestbooks}/>
        </div>
    )
}