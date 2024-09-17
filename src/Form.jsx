import React, { useState } from "react";

function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItemName) {
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <input
        type='text'
        name='name'
        maxLength={35}
        value={newItemName}
        className='form-input'
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <button type='submit' className='btn'>
        Add item
      </button>
    </form>
  );
}

export default Form;
