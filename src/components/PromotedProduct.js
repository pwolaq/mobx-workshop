import React from 'react';
import Tags from "./Tags";

const PromotedProduct = ({ name, tags }) => (
    <div>
        <strong>{name}</strong>
        <Tags items={tags} />
    </div>
);

export default PromotedProduct;
