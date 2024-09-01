import React from "react";
import { PersonAddAlt1 } from "@mui/icons-material";

export default function Form() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    passwordChecked: "",
    checkbox: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (state.password === state.passwordChecked) {
      window.alert("Successfully signed up");
    }
    if (state.password != state.passwordChecked) {
      return window.alert("Passwords do not match");
    }
    if (state.checkbox) {
      return window.alert("Thanks for joining our newsletter");
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    console.log(e.target)
    setState((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={state.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={state.password}
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          value={state.passwordChecked}
          type="password"
          name="passwordChecked"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        <span>
          <input
            type="checkbox"
            name="checkbox"
            id="checkit"
            checked={state.checkbox}
            onClick={handleChange}
          />
          <label htmlFor="checkit">Subscribe to our newsletter</label>
        </span>
        <button><PersonAddAlt1/><p>Sign up</p></button>
      </form>
    </div>
  );
}
