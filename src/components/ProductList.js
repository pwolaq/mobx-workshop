import React from 'react';
import Product from "./Product";
import PromotedProduct from "./PromotedProduct";

class ProductList extends React.Component {
    state = {
        products: [
            {id: 0, name: 'Apple', promoted: false, tags: ['Fruit']},
            {id: 1, name: 'Coffee', promoted: false, tags: ['Beverage']},
            {id: 2, name: 'Golden Apple', promoted: true, tags: ['Fruit', 'Valuable']}
        ],
    };

    render() {
        return (
            <div className="container">
                <h1 className="mb-3 mt-3">Product list</h1>
                <ul className="list-group">
                    {this.state.products.map(product => (
                        <li className="list-group-item" key={product.id}>
                            {product.promoted
                                ? <PromotedProduct {...product} />
                                : <Product {...product} />
                            }
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProductList;
