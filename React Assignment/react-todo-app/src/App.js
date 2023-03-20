import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState, useRef, useEffect } from "react";
import AddTodo from "./Components/AddTodo";
import SearchTodo from "./Components/SearchTodo";


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('myTodoList')) || []);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const focusRef = useRef(null);
  const focusRefAdd = useRef(null);
  const [updateItem, setUpdateItem] = useState(-1);

  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items));
  }, [items])

  const addItem = async (title) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newTodo = { id, checked: false, title };
    const listItemes = [...items, newTodo];
    setItems(listItemes);
  }


  const handleClick = async (id) => {
    const listItemes = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItemes);
  }
  const handleDelete = async (id) => {
    const listItemes = items.filter((item) => item.id !== id)
    setItems(listItemes);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    focusRefAdd.current.focus();
    const arrStr = newItem.split("");
    const flag = arrStr.every((arr) => arr === " ");
    if (flag) return;
    addItem(newItem);
    setNewItem('');
  }

  const handleEdit = (id) => {
    setUpdateItem(id);
  }
  const handleInputEdit = (value,num) => {
    const newTodoList = items.map( (item) => item.id===num ? {...item,checked: false ,title : value }: item)
    setItems(newTodoList);
  }
  return (
    <div className="App">
      <Header />

      <AddTodo
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
        focusRefAdd={focusRefAdd}
      />
      {items.length ?
        <SearchTodo
          searchItem={searchItem}
          setSearchItem={setSearchItem}
        />
        :
        null
      }
      <main>
        <Content
          items={items.filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase()))}
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          updateItem={updateItem}
          setUpdateItem={setUpdateItem}
          handleInputEdit={handleInputEdit}
          focusRef={focusRef}
        />
      </main>
      <Footer items={items} setItems={setItems} />
    </div>
  );
}

export default App;