import React, { Component } from 'react';

import * as Style from './style';

export default class Price extends Component {

    render () {
        const { children, type } = this.props;

        return (
            <Style.Price>
                { children } <Style.PriceType>{ type }</Style.PriceType>
            </Style.Price>
        )
    }
}
