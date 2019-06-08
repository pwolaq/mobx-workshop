import React from 'react';

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
                    <li key={id}>{name}</li>
                ))}
            </ul>
        )
    }
}

export default ProductList;
