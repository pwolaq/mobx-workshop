import React from 'react';
import Tags from "./Tags";

const Product = ({ name, tags }) => (
    <div>
        <span>{name}</span>
        <Tags items={tags} />
    </div>
);

export default Product;
