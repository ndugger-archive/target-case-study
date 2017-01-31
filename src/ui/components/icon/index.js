import React, { Component } from 'react';

import * as Style from './style';

export default class Icon extends Component {

    static defaultProps = {
        size: 32
    };

    render () {
        const { glyph, className, ...props } = this.props;
        const iconClassName = `${ className } material-icons`;

        return (
            <Style.Icon className={ iconClassName } { ...props }>
                { glyph }
            </Style.Icon>
        )
    }
}
