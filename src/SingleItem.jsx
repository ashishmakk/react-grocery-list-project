import React from "react";

function SingleItem({ item, deleteItem, editItem }) {
  return (
    <div className='single-task' key={item.id}>
      <input
        type='checkbox'
        id={item.id}
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p style={{ textDecoration: item.completed && "line-through" }}>
        {item.title}
      </p>

      <button
        type='button'
        className='btn-delete'
        onClick={() => deleteItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default SingleItem;
