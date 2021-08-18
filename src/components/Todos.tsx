import React from 'react';

const Todos: React.FC<{items: string[]}> = (props) => {
    // We use typescript with functional 
    //components by assinging React.FC type to our func.component. This way we can set merge built in props(children) with custom props.
    // We set our custom props inside <{}> brackets.
    return (
        <ul>
            {props.items.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
};

export default Todos;