import React, { Component } from 'react';

import ProductHighlightList from './list';
import * as Style from './style';

export default class ProductHighlight extends Component {

    static List = ProductHighlightList;

    render () {
        const { children } = this.props;

        return (
            <Style.ProductHighlight>
                { children }
            </Style.ProductHighlight>
        )
    }
}
