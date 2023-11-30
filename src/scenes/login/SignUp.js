import React from "react";

const SignUpForm = ({ setLoggedIn }) => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phoneNumber: "", // Add phone number field
    address: "", // Add address field
    option: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const [errorMessages, setErrorMessages] = React.useState({});

  const errors = {
    name: "empty name field",
    email: "invalid email",
    pass: "invalid password",
    age: "empty age field",
    phoneNumber: "empty phone number field", // Add error message for phone number
    address: "empty address field", // Add error message for address
    option: "please select an option",
  };

  const renderError = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password, option, name, age, phoneNumber, address } = state;

    if (!name) {
      setErrorMessages({ name: "name", message: errors.name });
    } else if (!email) {
      setErrorMessages({ name: "email", message: errors.email });
    } else if (!password) {
      setErrorMessages({ name: "pass", message: errors.password });
    } else if (!age) {
      setErrorMessages({ name: "age", message: errors.age });
    } else if (!phoneNumber) {
      setErrorMessages({ name: "phoneNumber", message: errors.phoneNumber });
    } else if (!address) {
      setErrorMessages({ name: "address", message: errors.address });
    } else {
      setLoggedIn();
    }

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
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
        <input
          type="number"
          name="age"
          value={state.age}
          onChange={handleChange}
          placeholder="Age"
        />
        {renderError("age")}
        <input
          type="tel" // Use "tel" for phone number
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        {renderError("phoneNumber")}
        <input
          type="text"
          name="address"
          value={state.address}
          onChange={handleChange}
          placeholder="Address"
        />
        {renderError("address")}
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
