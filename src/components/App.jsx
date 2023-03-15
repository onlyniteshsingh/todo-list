import React, { useState } from "react";

function App() {
  const [inputText, setText] = useState("");
  const [item, setItem] = useState([]);

  function addItem(event) {
    const newvalue = event.target.value;
    setText(newvalue);
  }

  function addItemtoList() {
    setItem((prev) => {
      return [...prev, inputText];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={addItem} value={inputText} />
        <button onClick={addItemtoList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
