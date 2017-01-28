import React, { Component } from 'react';

import * as Palette from '../../palette';
import * as Style from './style';

export default class Button extends Component {

    static defaultProps = {
        color: Palette.white,
        background: Palette.primary
    };

    static Secondary = props => (
        <Button background={ Palette.black } { ...props }/>
    );

    static Tertiary = props => (
        <Button background={ Palette.grey } color={ Palette.black } { ...props }/>
    );

    render () {
        const { background, color, ...props } = this.props;
        const style = {
            color,
            background,
            border: `1px solid ${ background }`
        };

        return (
            <Style.Button style={ style } { ...props }/>
        )
    }
}
