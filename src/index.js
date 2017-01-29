import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button } from './ui/components';

import * as Style from './ui/style';

class ProductPage extends Component {

    render () {

        return (
            <Style.Page>

                <Style.Grid>

                    <Style.Grid.Half>
                        photo carousel here
                    </Style.Grid.Half>

                    <Style.Grid.Half>

                        <Style.Flex>
                            <Style.Flex.Item>
                                <Button.Secondary>Pick Up In Store</Button.Secondary>
                            </Style.Flex.Item>
                            <Style.Flex.Item>
                                <Button>Add to Cart</Button>
                            </Style.Flex.Item>
                        </Style.Flex>

                        <Style.Flex>
                            <Style.Flex.Item>
                                <Button.Tertiary data-size='small'>
                                    Add to Registry
                                </Button.Tertiary>
                            </Style.Flex.Item>
                            <Style.Flex.Item>
                                <Button.Tertiary data-size='small'>
                                    Add to List
                                </Button.Tertiary>
                            </Style.Flex.Item>
                            <Style.Flex.Item>
                                <Button.Tertiary data-size='small'>
                                    Share
                                </Button.Tertiary>
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
