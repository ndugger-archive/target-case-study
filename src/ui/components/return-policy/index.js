import React, { Component } from 'react';

import * as Style from './style';

export default class ReturnPolicy extends Component {

    render () {
        const { children } = this.props;

        return (
            <Style.ReturnPolicy>
                <Style.ReturnPolicyLabel>
                    returns
                </Style.ReturnPolicyLabel>
                <Style.ReturnPolicyContent>
                    { children }
                </Style.ReturnPolicyContent>
            </Style.ReturnPolicy>
        )
    }
}
