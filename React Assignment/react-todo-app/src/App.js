import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState, useRef, useEffect } from "react";
import AddTodo from "./Components/AddTodo";
import SearchTodo from "./Components/SearchTodo";
import apiRequest from "./Components/apiRequest";

function App() {
  const API_URL = "http://localhost:4000/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const focusRef = useRef(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected Data");
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => fetchItems(), 2000)
  }, [])

  const addItem = async (title) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newTodo = { id, checked: false, title };
    const listItemes = [...items, newTodo];
    setItems(listItemes);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    }
    const result = await apiRequest(API_URL, postOptions);
    if(result) setFetchError(result);

  }


  const handleClick = async (id) => {
    const listItemes = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItemes);

    const myItem = listItemes.filter( (item) => item.id === id);

    const updateOptions = {
      method : 'PATCH',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({ checked : myItem[0].checked })
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOptions);
    if(result) setFetchError(result);
  }
  const handleDelete = (id) => {
    const listItemes = items.filter((item) => item.id !== id)
    setItems(listItemes);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    focusRef.current.focus();
    const arrStr = newItem.split("");
    const flag = arrStr.every((arr) => arr === " ");
    if (flag) return;
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className="App">
      <Header />

      <AddTodo
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
        focusRef={focusRef}
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
        {isLoading && <p className="loading">Loading...</p>}
        {fetchError && <p className="error">{`Error:${fetchError}`}</p>}
        {!fetchError && !isLoading &&
          <Content
            items={items.filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase()))}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        }
      </main>
      <Footer items={items} setItems={setItems} />
    </div>
  );
}

export default App;