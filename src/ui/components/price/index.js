import React, { Component } from 'react';

import * as Style from './style';

export default class Price extends Component {

    render () {
        const { children } = this.props;

        return (
            <Style.Price>
                { children } <Style.PriceType>online price</Style.PriceType>
            </Style.Price>
        )
    }
}
