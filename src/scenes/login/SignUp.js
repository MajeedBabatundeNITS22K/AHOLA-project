import React from "react";

const SignUpForm = ({setLoggedIn}) => {

  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    option: "",
  });


  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };


  const [errorMessages, setErrorMessages] = React.useState({});

  const errors = {
    name: "empty name filed",
    email: "invalid email",
    pass: "invalid password",
    option: "please select an option"
  };


  const renderError = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );




  const handleOnSubmit = evt => {

    evt.preventDefault();

    const { email, password, option, name } = state;

    if (!name) {
        setErrorMessages({ name: "name", message: errors.name });
    }
    if (!email) {
        setErrorMessages({ name: "email", message: errors.email });
          
    } else if (!password) {
        setErrorMessages({ name: "pass", message: errors.password });
    } else {
        setLoggedIn()
    }

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };



  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>

        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {renderError("name")}
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {renderError("email")}
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {renderError("pass")}
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
