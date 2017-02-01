import React, { Component } from 'react';

import * as Style from './style';

export default class PhotoCarousel extends Component {

    static defaultProps = {
        photos: [ ]
    };

    state = { current: 0 };

    get thumbnails () {
        const { current } = this.state;
        const { photos } = this.props;
        const thumbnails = [ ];

        if (current === 0) {
            thumbnails.push(photos[ photos.length - 1 ]);
        }
        else {
            thumbnails.push(photos[ current - 1 ]);
        }

        thumbnails.push(photos[ current ]);

        if (current === photos.length - 1) {
            thumbnails.push(photos[ 0 ]);
        }
        else {
            thumbnails.push(photos[ current + 1 ]);
        }

        return thumbnails;
    }

    handleThumbnailClick (thumbnail) {
        const { photos } = this.props;
        const index = photos.indexOf(thumbnail);

        this.setState({ current: index });
    }

    handleNavPrevClick () {
        const { current } = this.state;
        const { photos } = this.props;

        if (current === 0) {
            return this.setState({ current: photos.length - 1 });
        }

        this.setState({ current: current - 1 });
    }

    handleNavNextClick () {
        const { current } = this.state;
        const { photos } = this.props;

        if (current === photos.length - 1) {
            return this.setState({ current: 0 });
        }

        this.setState({ current: current + 1 });
    }

    render () {
        const { current } = this.state;
        const { photos } = this.props;

        return (
            <Style.PhotoCarouselContainer>

                <Style.PhotoCarouselCurrentImage style={ { backgroundImage: `url(${ photos[ current ] })` } }/>

                <Style.PhotoCarouselThumbnailContainer>
                    <Style.PhotoCarouselThumbnailButton glyph='chevron_left' onClick={ e => this.handleNavPrevClick() }/>
                    { this.thumbnails.map(photo => (
                        <Style.PhotoCarouselThumbnail
                            key={ photo }
                            current={ photos[ current ] === photo }
                            style={ { backgroundImage: `url(${ photo })` } }
                            onClick={ e => this.handleThumbnailClick(photo) }
                        />
                    )) }
                    <Style.PhotoCarouselThumbnailButton glyph='chevron_right' onClick={ e => this.handleNavNextClick() }/>
                </Style.PhotoCarouselThumbnailContainer>

            </Style.PhotoCarouselContainer>
        )
    }
}
