import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button, Heading, Link, Price, ProductHighlight, Promotion, Rating, Responsive, ReturnPolicy, Reviews } from './ui/components';

import * as Style from './ui/style';

class ProductPage extends Component {

    get canPickUpInStore () {
        const { purchasingChannelCode } = this.props.data;
        return purchasingChannelCode === '0' || purchasingChannelCode === '2';
    }

    get canAddToCart () {
        const { purchasingChannelCode } = this.props.data;
        return purchasingChannelCode === '0' || purchasingChannelCode === '1';
    }

    render () {
        const { title, CustomerReview, Offers, ItemDescription, Promotions } = this.props.data;
        const { totalReviews, Pro: [ proReview ], Con: [ conReview ], consolidatedOverallRating } = CustomerReview[ 0 ];
        const { formattedPriceValue, priceQualifier } = Offers[ 0 ].OfferPrice[ 0 ];
        const { features } = ItemDescription[ 0 ];

        return (
            <Style.Page>

                <Style.Grid>

                    <Style.Grid.Half>

                        <Heading>{ title }</Heading>

                    </Style.Grid.Half>

                    <Style.Grid.Half>

                        <Price type={ priceQualifier }>{ formattedPriceValue }</Price>

                        <Promotion.List>
                            { Promotions.map(promotion => (
                                <Promotion key={ promotion.promotionIdentifier }>
                                    { promotion.Description[ 0 ].shortDescription }
                                </Promotion>
                            )) }
                        </Promotion.List>

                        <Style.Flex>
                            <Style.Flex.Item style={ { textAlign: 'center' } }>
                                { this.canPickUpInStore && [
                                    <Button.Secondary key='pick up in store'>
                                        Pick Up In Store
                                    </Button.Secondary>,
                                    <Responsive minWidth={ 500 } key='find in a store'>
                                        <Link style={ { fontSize: 14, color: 'inherit' } }>
                                            find in a store
                                        </Link>
                                    </Responsive>
                                ] }
                            </Style.Flex.Item>
                            <Style.Flex.Item>
                                { this.canAddToCart && (
                                    <Button>Add to Cart</Button>
                                ) }
                            </Style.Flex.Item>
                        </Style.Flex>

                        <ReturnPolicy>
                            This item must be returned within 30 days of the ship date.
                            See <Link style={ { color: 'inherit' } }>return policy</Link> for details.
                            Prices, promotions, styles and availability may vary by store and online.
                        </ReturnPolicy>

                        <Style.Flex>
                            <Style.Flex.Item>
                                <Button.Tertiary size='small'>Add to Registry</Button.Tertiary>
                            </Style.Flex.Item>
                            <Style.Flex.Item>
                                <Button.Tertiary size='small'>Add to List</Button.Tertiary>
                            </Style.Flex.Item>
                            <Style.Flex.Item>
                                <Button.Tertiary size='small'>Share</Button.Tertiary>
                            </Style.Flex.Item>
                        </Style.Flex>

                        <ProductHighlight.List>
                            { features.map(feature => (
                                <ProductHighlight key={ feature }>
                                    { feature.replace(/<.+?>/g, '') }
                                </ProductHighlight>
                            )) }
                        </ProductHighlight.List>

                    </Style.Grid.Half>

                    <Style.Grid.Half>

                        <Style.Flex style={ { alignItems: 'baseline' } }>
                            <Style.Flex.Item>
                                <Rating value={ Number(consolidatedOverallRating) }/>
                            </Style.Flex.Item>
                            <Style.Flex.Item style={ { textAlign: 'right' } }>
                                <Link style={ { fontSize: 14, color: 'inherit' } }>
                                    view all { totalReviews } reviews
                                </Link>
                            </Style.Flex.Item>
                        </Style.Flex>

                        <Reviews pro={ proReview } con={ conReview }/>

                    </Style.Grid.Half>

                </Style.Grid>

            </Style.Page>
        )
    }
}

fetch('./item-data.json')
.then(response => response.json())
.then(data => ReactDOM.render(
    <ProductPage data={ data.CatalogEntryView[ 0 ] }/>,
    document.getElementById('app')
));
