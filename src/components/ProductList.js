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
        sortReverse: false,
        searchBy: '',
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
        const sortReverse = prevState.sortBy === sortBy ? !prevState.sortReverse : false;

        return {
            sortReverse,
            sortBy
        }
    });

    handleSearch = e => this.setState({
        searchBy: e.currentTarget.value
    });

    render() {
        const sortStrategy = getSortStrategy(this.state.sortBy);
        const searchBy = this.state.searchBy.toLowerCase();
        const filteredProducts = searchBy !== '' ? this.state.products.filter(product => product.name.toLowerCase().includes(searchBy)) : this.state.products;
        const sortedProducts = this.state.sortReverse ? filteredProducts.sort(sortStrategy).reverse() : filteredProducts.sort(sortStrategy);

        return (
            <div className="container">
                <h1 className="mb-3 mt-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <span>Product list</span>
                        <input className="ml-3 form-control" style={{ width: 200 }} type="text" value={this.state.searchBy} onChange={this.handleSearch} placeholder="Search..." />
                    </div>
                    <div>
                        <button className="btn btn-success" onClick={() => this.handleSortClick(SORT_BY_NAME)}>Sort by name</button>
                        <button className="ml-3 btn btn-success" onClick={() => this.handleSortClick(SORT_BY_PRICE)}>Sort by price</button>
                    </div>
                </h1>
                <ul className="list-group">
                    {sortedProducts.map(product => (
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
