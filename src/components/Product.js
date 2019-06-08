import React from 'react';
import Tags from "./Tags";

const Product = ({ id, name, tags, onBuyClick, price, isSold }) => {
    const handleClick = () => onBuyClick(id);

    return (
        <div>
            <button className="btn btn-outline-success float-right" onClick={handleClick}>Buy</button>
            <h4>{isSold ? <s>{name}</s> : name} <span className="badge badge-secondary">{price}$</span></h4>
            <Tags items={tags} />
        </div>
    );
};

export default Product;
