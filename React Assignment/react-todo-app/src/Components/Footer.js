import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { MyContext } from '../App';



export default function Footer() {
  const { items, setItems } = useContext(MyContext);
  const date = new Date().getFullYear();

  
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
            onClick={() => setItems([])}
          /> All
        </p>
        :
        null
      }
    </footer>
  )
}
