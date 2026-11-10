import React from "react";

const Input = () => {
  return (
    <React.Fragment>
      <div className="inputContainer">
        <input type="text" placeholder="Add a new todo" />
        <button>Add</button>
      </div>
    </React.Fragment>
  );
};

export default Input;
