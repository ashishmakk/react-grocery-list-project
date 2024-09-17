import { useState } from "react";
import Form from "./Form";
import "./index.css";
import { nanoid } from "nanoid";
import TaskContainer from "./TaskContainer";

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const setLocalStorage = (data) => {
  localStorage.setItem("list", JSON.stringify(data));
};

function App() {
  const [itemList, setItemList] = useState(defaultList);

  const addItem = (itemName) => {
    const itemObj = {
      title: itemName,
      id: nanoid(),
      completed: false,
    };

    const newList = [...itemList, itemObj];
    setItemList(newList);
    setLocalStorage(newList);
  };

  const deleteItem = (id) => {
    const newList = itemList.filter((item) => item.id !== id);

    setItemList(newList);
    setLocalStorage(newList);
  };

  const editItem = (itemId) => {
    const newList = itemList.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }

      return item;
    });

    setItemList(newList);
    setLocalStorage(newList);
  };

  return (
    <main>
      <div className='container'>
        <h3>React Grocery List Project</h3>
        <Form addItem={addItem} />
        <TaskContainer
          itemList={itemList}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      </div>
    </main>
  );
}

export default App;
