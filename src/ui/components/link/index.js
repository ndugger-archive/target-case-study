import React, { Component } from 'react';

import * as Style from './style';

export default class Link extends Component {

    static defaultProps = {
        href: 'javascript:void(0)',
        target: null
    };

    render () {
        const { children, ...props } = this.props;

        return (
            <Style.Link { ...props }>
                { children }
            </Style.Link>
        )
    }
}
