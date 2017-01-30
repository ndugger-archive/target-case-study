import React, { Component } from 'react';

import PromotionList from './list';
import * as Style from './style';

export default class Promotion extends Component {

    static List = PromotionList;

    render () {
        const { children } = this.props;

        return (
            <Style.Promotion>
                { children }
            </Style.Promotion>
        )
    }
}
