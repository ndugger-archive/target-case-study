import React, { Component } from 'react';

import * as Style from './style';

export default class Rating extends Component {

    static defaultProps = {
        max: 5,
        value: 0,
        starSize: 32
    };

    render () {
        const { max, value, starSize } = this.props;

        return (
            <Style.RatingContainer>
                { Array.from(new Array(5), (_, i) => (
                    <Style.RatingStar key={ i } glyph='star' filled={ i < value } size={ starSize }/>
                )) }
            </Style.RatingContainer>
        )
    }
}
