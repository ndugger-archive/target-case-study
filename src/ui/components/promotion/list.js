import React, { Component } from 'react';

import * as Style from './style';

export default class PromotionList extends Component {

    render () {
        const { children } = this.props;

        return (
            <Style.PromotionList>
                { children }
            </Style.PromotionList>
        )
    }
}
