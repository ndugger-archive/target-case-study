import React, { Component } from 'react';

import * as Style from './style';

export default class ProductHighlightList extends Component {

    render () {
        const { children } = this.props;

        return (
            <Style.ProductHighlightList>
                <Style.ProductHighlightHeading>
                    product highlights
                </Style.ProductHighlightHeading>
                <Style.ProductHighlightContent>
                     { children }
                </Style.ProductHighlightContent>
            </Style.ProductHighlightList>
        )
    }
}
