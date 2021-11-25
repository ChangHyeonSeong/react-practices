import React from 'react';

/*

*/
export default function() {
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특징1: HTML과 차이점</p>
            {/*
                1. 속성은 Camel Case
            */}
            <input type='text' maxKLength='10' />
            {/**
             * 
             * 2. Element 는 꼭 닫혀야 한다.(html은 안닫아도 되는걸 닫아야한다 createElement() 할땐 그래야한다??)
             * 오류) <br >, <hr>, <input type= 'text'>, <img src=''>
             * 
             */}
             <br/>
             <hr/>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHp4mrTvwmf-qVtXPNK8TnaA3TFJW6_a9R6CqqwFQosUTnTB9S4Tjln8IKGWaZy0rRdA&usqp=CAU'/>
             {/**
             * 
             * 3. 속성 이름은 DOM API 기반이다.
             * <div id='box' class=''>.....</div>
             * document.getElementById('box').className = 'box' 
             */}
             <div id='box' className='box'>
                box입니다.
             </div>
        </div>
    )
}