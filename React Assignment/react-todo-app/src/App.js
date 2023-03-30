import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useEffect } from "react";
import AddTodo from "./Components/AddTodo";
import SearchTodo from "./Components/SearchTodo";
import { useSelector } from "react-redux";

function App() {

  // react-redux
  const myList = useSelector((state) => state.todosList.lists);
  const searchItem = useSelector((state) => state.todosList.searchItem);

  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(myList));
  }, [myList])

  return (
    <div className="App">
      <Header />
      <AddTodo />
      {myList.length ? <SearchTodo /> : null}
      <main>
        <Content
          items={myList.filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase()))}
        />
        {
          !myList.some((item) => item.title.toLowerCase().includes(searchItem.toLowerCase()))
          &&
          myList.length !== 0
          &&
          <div style={{ marginTop: "2rem", fontSize: "1.5rem", color: "papayawhip", display: "grid", placeContent: "center", height: "50vh" }}>
            Not found
          </div>
        }

        {
          !searchItem
          &&
          myList.length === 0
          &&
          <div style={{ marginTop: "2rem", fontSize: "1.5rem", color: "papayawhip", display: "grid", placeContent: "center", height: "50vh" }}>Your Todo List is empty</div>
        }
      </main>
      <Footer />
    </div >
  );
}

export default App;