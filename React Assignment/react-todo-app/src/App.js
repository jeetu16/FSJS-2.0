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
      </main>
      <Footer />
    </div >
  );
}

export default App;