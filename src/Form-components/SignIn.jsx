import React from "react";
import { NavLink } from "react-router-dom";

export default function SignIn() {
    const [state, setState] = React.useState({
        email: "",
        password: "",
        passwordChecked: "",
        checkbox: false,
      });
    
      function handleSubmit(e) {
        e.preventDefault();
        // if (state.password === state.passwordChecked) {
        //   window.alert("Successfully signed up");
        // }
        // if (state.password != state.passwordChecked) {
        //   return window.alert("Passwords do not match");
        // }
        // if (state.checkbox) {
        //   window.alert("Thanks for joining our newsletter");
        // }
      }
    
      function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setState((prevState) => {
          return {
            ...prevState,
            [name]: type === "checkbox" ? checked === !state.checkbox : value,
          };
        });
      }
    
      return (
        <div className="signin-form">
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
            <NavLink style={{textDecoration : "none"}}>Forgot password?</NavLink>
            <button>Sign in</button>

            <div className="no-account">
                <p>Don't have an account? <NavLink style={{textDecoration: "none"}} to={"/login"}>Sign up</NavLink></p>
            </div>
          </form>
        </div>
      );
    
}