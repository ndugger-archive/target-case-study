import React from 'react';
import { shallow } from 'enzyme';

import PhotoCarousel from '../../../src/ui/components/photo-carousel';

const photos = [ 'foo', 'bar', 'baz', 'car', 'caz' ];

test('carousel -> should match snapshot', () => {
    const carousel = shallow(<PhotoCarousel photos={ photos }/>);

    expect(carousel).toMatchSnapshot();
});

test('carousel.thumbnails -> should be an array of [ previous, current, next ]', () => {
    const carousel = shallow(<PhotoCarousel photos={ photos }/>);
    const instance = carousel.instance();

    expect(instance.thumbnails).toEqual([ 'caz', 'foo', 'bar' ]);
});

test('carousel.state.current -> initial value should be 0', () => {
    const carousel = shallow(<PhotoCarousel photos={ photos }/>);
    const instance = carousel.instance();

    expect(instance.state.current).toEqual(0);
})

test('carousel.handleThumbnailClick -> should set the clicked thumbnail as the new current photo', () => {
    const carousel = shallow(<PhotoCarousel photos={ photos }/>);
    const instance = carousel.instance();

    instance.handleThumbnailClick('bar');

    expect(instance.state.current).toEqual(1);
});

test('carousel.handleNavPrevClick -> should navigate the thumbnails back one', () => {
    const carousel = shallow(<PhotoCarousel photos={ photos }/>);
    const instance = carousel.instance();

    instance.handleNavPrevClick();

    expect(instance.state.current).toEqual(4);
});

test('carousel.handleNavNextClick -> should navigate the thumbnails forward one', () => {
    const carousel = shallow(<PhotoCarousel photos={ photos }/>);
    const instance = carousel.instance();

    instance.handleNavNextClick();

    expect(instance.state.current).toEqual(1);
});
