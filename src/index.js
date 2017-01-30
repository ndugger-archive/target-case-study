import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button, Heading, Price, ProductHighlight, Promotion, ReturnPolicy } from './ui/components';

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
        const { title, Offers, ItemDescription } = this.props.data;
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
                            <Promotion>spend $50, free shipping</Promotion>
                            <Promotion>$25 gift card with purchase</Promotion>
                        </Promotion.List>

                        <Style.Flex>
                            <Style.Flex.Item>
                                { this.canPickUpInStore && (
                                    <Button.Secondary>Pick Up In Store</Button.Secondary>
                                ) }
                            </Style.Flex.Item>
                            <Style.Flex.Item>
                                { this.canAddToCart && (
                                    <Button>Add to Cart</Button>
                                ) }
                            </Style.Flex.Item>
                        </Style.Flex>

                        <ReturnPolicy>
                            This item must be returned within 30 days of the ship date. See return policy for details.
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
                        reviews here
                    </Style.Grid.Half>

                </Style.Grid>

            </Style.Page>
        )
    }
}

fetch('./item-data.json')
.then(response => response.json())
.then(data => ReactDOM.render(<ProductPage data={ data.CatalogEntryView[ 0 ] }/>, document.getElementById('app')));
