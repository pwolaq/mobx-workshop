import React from 'react';
import {observer, inject} from 'mobx-react';
import Product from "./Product";

export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';

@inject('productStore')
@observer
class ProductList extends React.Component {
    handleBuyClick = id => this.props.productStore.buyProduct(id);

    handleSortClick = sortBy => this.props.productStore.sort(sortBy);

    handleSearch = e => this.props.productStore.search(e);

    render() {
        return (
            <div className="container">
                <h1 className="mb-3 mt-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <span>Product list</span>
                        <input className="ml-3 form-control" style={{ width: 200 }} type="text" value={this.props.productStore.searchBy} onChange={this.handleSearch} placeholder="Search..." />
                    </div>
                    <div>
                        <button className="btn btn-success" onClick={() => this.handleSortClick(SORT_BY_NAME)}>Sort by name</button>
                        <button className="ml-3 btn btn-success" onClick={() => this.handleSortClick(SORT_BY_PRICE)}>Sort by price</button>
                    </div>
                </h1>
                <ul className="list-group">
                    {this.props.productStore.products.map(product => (
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
