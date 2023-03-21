import React from 'react';
import TodoList from './TodoList';


export default function Content({items}) {

  return (
    <>
      {items.length ? <TodoList items={items}/> : (<p style={{ marginTop: "2rem", fontSize: "1.5rem" }}>Your Todo List is empty</p>)
      }
    </>
  )
}
