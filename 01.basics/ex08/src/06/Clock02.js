import React from 'react';

export default function() {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();


    //slice(-2) 마지막인덱스 두개 반환
    // 바벨이 createElement() 로 바꿀떄 한줄씩 한줄씩 파라미터가 되서 함수에 들어가게 변환된다
    return (
        <div>
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}  
            { ' : ' }                                           
            {('0' + minutes).slice(-2)} 
            { ' : ' } 
            {('0' + seconds).slice(-2)} 
            { ' ' }
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    )
}