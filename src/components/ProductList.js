import React from 'react';
import {observer} from 'mobx-react';
import Product from "./Product";
import ProductStore from '../stores/ProductStore';

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

@observer
class ProductList extends React.Component {
    handleBuyClick = id => ProductStore.products.find(product => product.id === id).isSold = true;

    handleSortClick = sortBy => {
        ProductStore.sortReverse = ProductStore.sortBy === sortBy ? !ProductStore.sortReverse : false;
        ProductStore.sortBy = sortBy;
    };

    handleSearch = e => ProductStore.searchBy = e.currentTarget.value;

    render() {
        const sortStrategy = getSortStrategy(ProductStore.sortBy);
        const searchBy = ProductStore.searchBy.toLowerCase();
        const filteredProducts = searchBy !== '' ? ProductStore.products.filter(product => product.name.toLowerCase().includes(searchBy)) : ProductStore.products;
        const sortedProducts = ProductStore.sortReverse ? filteredProducts.sort(sortStrategy).reverse() : filteredProducts.sort(sortStrategy);

        return (
            <div className="container">
                <h1 className="mb-3 mt-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <span>Product list</span>
                        <input className="ml-3 form-control" style={{ width: 200 }} type="text" value={ProductStore.searchBy} onChange={this.handleSearch} placeholder="Search..." />
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
