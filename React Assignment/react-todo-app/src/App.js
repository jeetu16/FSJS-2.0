import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState, useEffect, createContext } from "react";
import AddTodo from "./Components/AddTodo";
import SearchTodo from "./Components/SearchTodo";

const MyContext = createContext();

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('myTodoList')) || []);
  const [searchItem, setSearchItem] = useState('');
  const [updateItem, setUpdateItem] = useState(-1);

  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items));
  }, [items])

  
  return (
    <div className="App">
      <Header />
      <MyContext.Provider value={{ items, setItems, searchItem, setSearchItem, updateItem, setUpdateItem }}>
        <AddTodo />
        { items.length ? <SearchTodo /> : null }
        <main>
          <Content
            items={items.filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase()))}
          />
        </main>
        <Footer />
      </MyContext.Provider>
    </div >
  );
}

export { MyContext }
export default App;