import React from 'react';
import Product from "./Product";

class ProductList extends React.Component {
    state = {
        products: [
            {id: 0, name: 'Apple', tags: ['Fruit']},
            {id: 1, name: 'Coffee', tags: ['Beverage']},
            {id: 2, name: 'Golden Apple', tags: ['Fruit', 'Valuable']}
        ],
    };

    handleBuyClick = id => this.setState(prevState => ({
        products: prevState.products.map(product => product.id === id ? {
            ...product,
            isSold: true,
        } : product)
    }));

    render() {
        return (
            <div className="container">
                <h1 className="mb-3 mt-3">Product list</h1>
                <ul className="list-group">
                    {this.state.products.map(product => (
                        <li className="list-group-item" key={product.id}>
                            <Product {...product} onBuyClick={this.handleBuyClick} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProductList;
