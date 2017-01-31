import React, { Component } from 'react';

import * as Style from './style';

export default class Quantity extends Component {

    state = { value: 1 };

    handleAddQuantity () {
        this.setState({ value: this.state.value + 1 });
    }

    handleSubtractQuantity () {
        if (this.state.value > 1) {
            this.setState({ value: this.state.value - 1 });
        }
    }

    render () {
        const { value } = this.state;

        return (
            <Style.QuantityContainer>

                <Style.QuantityLabel>quanitity:</Style.QuantityLabel>

                <Style.QuanitityChanger>
                    <Style.QuantityButton glyph='remove_circle' onClick={ e => this.handleSubtractQuantity(e) }/>
                    <Style.QuanitityValue>{ value }</Style.QuanitityValue>
                    <Style.QuantityButton glyph='add_circle' onClick={ e => this.handleAddQuantity(e) }/>
                </Style.QuanitityChanger>

                <Style.QuantityClearFix/>

            </Style.QuantityContainer>
        )
    }
}
