import React from 'react';
import GuestbookListItem from './GuestbookListItem';

export default function({guestbooks}) {
    return (
        <ul className="Guestbook__List">
            {guestbooks.map((guestbook)=> <GuestbookListItem 
                                                    key={guestbook.no}
                                                    name={guestbook.name} 
                                                    message={guestbook.message} /> )}
        </ul>
    )
}