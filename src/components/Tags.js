import React from 'react';

const Tags = ({items}) => (
    <React.Fragment>
        {items.map(tag => (
            <span className="ml-1 badge badge-primary" key={tag}>{tag}</span>
        ))}
    </React.Fragment>
);

export default Tags;
