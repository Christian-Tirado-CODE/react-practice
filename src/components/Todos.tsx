import React from 'react';
import Todo from "../models/models"; // Classes are not only used as a constructor to create objects but as a Type in TS.
import Item from "./Item";
const Todos: React.FC<{items: Todo[]}> = (props) => {
    // We use typescript with functional 
    //components by assinging React.FC type to our func.component. This way we can set merge built in props(children) with custom props.
    // We set our custom props inside <{}> brackets.
    return (
        <ul>
            {props.items.map(item => <Item key={item.id} text={item.name} />)}
        </ul>
    );
};

export default Todos;