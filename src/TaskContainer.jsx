import React from "react";
import SingleItem from "./SingleItem";

function TaskContainer({ itemList, deleteItem, editItem }) {
  return (
    <section className='task-container'>
      {itemList.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        );
      })}
    </section>
  );
}

export default TaskContainer;
