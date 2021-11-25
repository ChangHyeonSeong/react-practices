import React, { Fragment, Component } from 'react';

import Header from './Header';
import Content from './Content';

export default class extends Component {
    render() {   //render: render() 와 같다 ,  render() 함수를 오버로딩한것이다
        return (
            <Fragment>
                <Header />
                <Content />
            </Fragment>
        );
    }
}