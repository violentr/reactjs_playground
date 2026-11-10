import React from "react";
import "./Input.css";

const Input = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };

  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Add task"
          className="appInput"
          onChange={onChangeHandler}
        />
      </form>
    </React.Fragment>
  );
};

export default Input;
