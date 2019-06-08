import React from 'react';
import Product from "./Product";

export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';

const getSortStrategy = sortBy => {
    if (sortBy === SORT_BY_NAME) {
        return (a, b) => a.name.localeCompare(b.name);
    } else if (sortBy === SORT_BY_PRICE) {
        return (a, b) => a.price - b.price;
    }

    return () => 0;
};

class ProductList extends React.Component {
    state = {
        sortBy: null,
        products: [
            {id: 0, name: 'Apple', tags: ['Fruit'], price: 15},
            {id: 1, name: 'Coffee', tags: ['Beverage'], price: 10},
            {id: 2, name: 'Golden Apple', tags: ['Fruit', 'Valuable'], price: 50},
            {id: 3, name: 'Banana', tags: ['Fruit'], price: 5},
        ],
    };

    handleBuyClick = id => this.setState(prevState => ({
        products: prevState.products.map(product => product.id === id ? {
            ...product,
            isSold: true,
        } : product)
    }));

    handleSortClick = sortBy => this.setState(prevState => {
        const strategy = getSortStrategy(sortBy);

        return {
            sortBy,
            products: prevState.products.sort(strategy)
        };
    });

    render() {
        return (
            <div className="container">
                <h1 className="mb-3 mt-3">
                    Product list
                    <div className="float-right">
                        <button className="btn btn-success" onClick={() => this.handleSortClick(SORT_BY_NAME)}>Sort by name</button>
                        <button className="ml-3 btn btn-success" onClick={() => this.handleSortClick(SORT_BY_PRICE)}>Sort by price</button>
                    </div>
                </h1>
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
