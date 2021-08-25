import React from 'react';


const Output = props => {
    return <p>{props.children}</p>;
};

/* This component is not complex enough to have it's own testing logic on a separate file.*/

export default Output;