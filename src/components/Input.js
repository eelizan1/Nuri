import React from "react";
import './Input.css';

const Input = () => {
  return (
    <div className="form-group">
    <label htmlFor="exampleInput">Your E-Mail</label>
    <div className="sign-up">
      <input type="email" id="exampleInput" className="form-control" />
      <button className="email-button">Sign Up</button>
    </div>
  </div>
  );
}

export default Input;