import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button } from './ui/components';

import * as Style from './ui/style';

class ProductPage extends Component {

    render () {
        return (
            <Style.Page>

                <Style.FlexContainer>

                    <Style.FlexItem>
                        photo carousel here
                    </Style.FlexItem>

                    <Style.FlexContainer>
                        <Style.FlexItem>
                            <Button.Secondary>Pick Up In Store</Button.Secondary>
                        </Style.FlexItem>
                        <Style.FlexItem>
                            <Button>Add to Cart</Button>
                        </Style.FlexItem>
                    </Style.FlexContainer>

                </Style.FlexContainer>

            </Style.Page>
        )
    }
}

ReactDOM.render(<ProductPage/>, document.getElementById('app'));
