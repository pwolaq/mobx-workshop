import React from 'react';
import Product from "./Product";
import PromotedProduct from "./PromotedProduct";

class ProductList extends React.Component {
    state = {
        products: [
            {id: 0, name: 'Apple', promoted: false},
            {id: 1, name: 'Coffee', promoted: false},
            {id: 2, name: 'Golden Apple', promoted: true}
        ],
    };

    render() {
        return (
            <ul>
                {this.state.products.map(product => (
                    <li key={product.id}>
                        {product.promoted
                            ? <PromotedProduct {...product} />
                            : <Product {...product} />
                        }
                    </li>
                ))}
            </ul>
        )
    }
}

export default ProductList;
