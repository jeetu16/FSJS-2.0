import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllListItems } from '../features/todoList/todoList';

export default function Footer() {
  
  // react-redux
  const items = useSelector((state) => state.todosList.lists);
  const dispatch = useDispatch();

  return (
    <footer style={{ justifyContent: items.length ? "space-between" : "center" }}>
      <p>
        {items.length} {items.length === 1 || items.length == 0 ? "Task" : "Tasks"}
      </p>
      {items.length ? <p>{(items.filter((item) => !item.checked)).length} Remaining</p> : null}
      {items.length ?
        <p>
          <FaTrashAlt
            role="button"
            onClick={() => dispatch(deleteAllListItems())}
          /> All
        </p>
        :
        null
      }
    </footer>
  )
}
