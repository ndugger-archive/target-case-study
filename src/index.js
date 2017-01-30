import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button, Heading, Price, Promotion, ReturnPolicy } from './ui/components';

import * as Style from './ui/style';

class ProductPage extends Component {

    render () {

        return (
            <Style.Page>

                <Style.Grid>

                    <Style.Grid.Half>

                        <Heading>Ninja Professional Blender with Single Serve Blending Cups</Heading>

                    </Style.Grid.Half>

                    <Style.Grid.Half>

                        <Price>$139.99</Price>

                        <Promotion.List>
                            <Promotion>spend $50, free shipping</Promotion>
                            <Promotion>$25 gift card with purchase</Promotion>
                        </Promotion.List>

                        <Style.Flex>
                            <Style.Flex.Item>
                                <Button.Secondary>Pick Up In Store</Button.Secondary>
                            </Style.Flex.Item>
                            <Style.Flex.Item>
                                <Button>Add to Cart</Button>
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

                    </Style.Grid.Half>

                    <Style.Grid.Half>
                        reviews here
                    </Style.Grid.Half>

                </Style.Grid>

            </Style.Page>
        )
    }
}

ReactDOM.render(<ProductPage/>, document.getElementById('app'));
