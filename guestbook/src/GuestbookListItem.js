import React from 'react';

export default function({name, message}) {
    return (
        <li className="Guestbook__List__Item">
            <strong>{ name }</strong>
            <p>
                { 
                   message
                    .replace(/<br\/>/g, '\n')
                    .split('\n')
                    .map( line => {  
                        return (<span>{line}<br/></span>) 
                    }) 
                }
            </p>
            <strong></strong>
            <a href=''>삭제</a>
        </li>
    )
}