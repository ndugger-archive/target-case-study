import React, { Component } from 'react';

import * as Style from './style';

export default class Responsive extends Component {

    static defaultProps = {
        minWidth: 0,
        maxWidth: 0
    }

    render () {
        const { children, ...props } = this.props;

        return (
            <Style.Responsive { ...props }>
                { children }
            </Style.Responsive>
        )
    }
}
