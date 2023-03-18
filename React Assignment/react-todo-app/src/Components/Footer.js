import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Footer({ items, setItems }) {
  const date = new Date().getFullYear();
  return (
    <footer style={{justifyContent: items.length ? "space-between": "center"}}>
      <p>
        {items.length} {items.length === 1 || items.length == 0 ? "Task" : "Tasks"}
      </p>
      { items.length ? <p>{(items.filter((item) => !item.checked)).length} remaining tasks</p> : null }
      {items.length ?
        <p>
          <FaTrashAlt
            role="button"
            onClick={() => setItems([])}
          /> All Task
        </p>
        :
        null
      }
    </footer>
  )
}
