import React from 'react';
import { shallow } from 'enzyme';

import Quantity from '../../../src/ui/components/quantity';

test('quantity -> should match snapshot', () => {
    const quantity = shallow(<Quantity/>);

    expect(quantity).toMatchSnapshot();
});

test('quantity.state.value -> initial value should be 1', () => {
    const quantity = shallow(<Quantity/>);
    const instance = quantity.instance();

    expect(instance.state.value).toEqual(1);
});

test('quantity.handleSubtractQuantity -> should NOT subtract any value if the value is 1', () => {
    const quantity = shallow(<Quantity/>);
    const instance = quantity.instance();

    instance.handleSubtractQuantity();

    expect(instance.state.value).toEqual(1);
});

test('quantity.handleSubtractQuantity -> should subtract 1 from quantity.state.value', () => {
    const quantity = shallow(<Quantity/>);
    const instance = quantity.instance();

    instance.setState({ value: 2 });
    instance.handleSubtractQuantity();

    expect(instance.state.value).toEqual(1);
});

test('quantity.handleAddQuantity -> should add 1 to quantity.state.value', () => {
    const quantity = shallow(<Quantity/>);
    const instance = quantity.instance();

    instance.handleAddQuantity();

    expect(instance.state.value).toEqual(2);
});
