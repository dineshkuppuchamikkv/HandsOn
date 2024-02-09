import React, { useState } from "react";

export default function Todo() {
  const [items, setItems] = useState([
    { id: 1, checked: true, text: "practice coding" },
    { id: 2, checked: false, text: "practice coding" },
    { id: 3, checked: false, text: "practice coding" }
  ]);

  function handleCheckboxClick(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  }

  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  return (
    <div className="todo-container">
      <main>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                onClick={() => handleCheckboxClick(item.id)}
                checked={item.checked}
              />
              <label>{item.text}</label>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
