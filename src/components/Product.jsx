import React from 'react';

const Product = (props) => {
    return (
        <figure>
            <img
                src={'./images/logos/' + props.logoFile + '.svg'}
                alt={props.logoText}
                className={props.inverted ? 'inverted' : ''}
            />
            <figcaption>{props.logoText}</figcaption>
        </figure>
    )
}

export default Product;