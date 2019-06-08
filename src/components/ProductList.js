import React from 'react';
import Product from "./Product";

class ProductList extends React.Component {
    state = {
        products: [
            {id: 0, name: 'Apple'},
            {id: 1, name: 'Coffee'},
        ],
    };

    render() {
        return (
            <ul>
                {this.state.products.map(({id, name}) => (
                    <li key={id}>
                        <Product name={name} />
                    </li>
                ))}
            </ul>
        )
    }
}

export default ProductList;
