import React from 'react';

export default function() {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    
    const htmls = 
        "<span>" + 
        ('0' + hours).slice(-2) +
        " : " +
        ('0' + minutes).slice(-2) +
        " : " +
        ('0' + seconds).slice(-2) +
        "</span>";
    
    // const o = {
    //     __html: htmls
    // }
    return (
        //const htmls = "<script> 불순한 목적의 코드 </script>";  
        // 다른사람이 만든 컴포넌트를 쓸때 위와 같은 소스가 속성에 들어갈 수 있다.
        // 그러한 이유로
        // HTML 태그를 동적으로 생성하여 JSX element의 특정 속성(dangerouslySetInnerHTML)으로 추가하는 작업은 금지하고 있지만,
        // XSS(Cross-Site Scripting) 보호기능을 끄고 사용할 수 있다.
        //
        <div dangerouslySetInnerHTML={ {__html: htmls} } />
       
    )
}