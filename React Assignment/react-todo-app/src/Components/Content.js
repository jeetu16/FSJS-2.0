import React, { useState } from 'react';
import TodoList from './TodoList';


export default function Content({ items, handleClick, handleDelete, handleEdit, updateItem, setUpdateItem }) {

  return (
    <>
      {items.length ? (
        <TodoList
          items={items}
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          updateItem={updateItem}
          setUpdateItem={setUpdateItem}
        />
      ) : (<p style={{ marginTop: "2rem", fontSize: "1.5rem" }}>Your Todo List is empty</p>)
      }
    </>
  )
}
