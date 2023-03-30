import React from 'react';
import TodoList from './TodoList';

export default function Content({items}) {

  return (
    <>
      { items.length ? <TodoList items={items}/> : null }
    </>
  )
}
