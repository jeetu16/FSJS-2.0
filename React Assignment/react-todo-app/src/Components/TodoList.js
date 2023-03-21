import React, { useContext } from 'react';
import Todo from './Todo';
import Edit from './Edit';
import { MyContext } from '../App';



const TodoList = ({items}) => {

    const { updateItem } = useContext(MyContext);

    return (
        <ul>
            {
                items.map((item) => (
                    updateItem === item.id ?
                        <Edit
                            key={(item.id)}
                            item={item}
                        />
                        :
                        <Todo
                            key={item.id}
                            item={item}
                        />
                ))
            }
        </ul>
    )
}

export default TodoList