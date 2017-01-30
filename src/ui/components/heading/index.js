import React, { Component } from 'react';

import * as Style from './style';

export default class Heading extends Component {

    render () {
        const { children } = this.props;

        return (
            <Style.H1>
                { children }
            </Style.H1>
        )
    }
}
