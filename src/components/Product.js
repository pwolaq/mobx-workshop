import React from 'react';
import Tags from "./Tags";

const Product = ({ id, name, tags, onBuyClick }) => {
    const handleClick = () => onBuyClick(id);

    return (
        <div>
            <span>{name}</span>
            <Tags items={tags} />
            <button className="btn btn-outline-success float-right" onClick={handleClick}>Buy</button>
        </div>
    );
};

export default Product;
