import React, {useState} from "react";


// User Login info
const database = [
  {
    email: "user1@gmail.com",
    password: "pass1",
    userType: "driver"
  },
  {
    email: "user2@gmail.com",
    password: "pass2",
    userType: "consumer"
  }
];


const SignInForm = ({setLoggedIn}) =>  {
  const [state, setState] = React.useState({
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

  const handleOnSubmit = evt => {

    evt.preventDefault();

    const { email, password } = state;

    

    const userData = database.find((user) => user.email === email);

    if (userData) {
      if (userData.password !== password) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setLoggedIn()
      }
    } else {
      // Username not found
      setErrorMessages({ name: "email", message: errors.email });
    }

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };








  


  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    email: "invalid email",
    pass: "invalid password",
    option: "please select an option"
  };


  const renderEmailErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const renderPassErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {renderEmailErrorMessage("email")}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        {renderPassErrorMessage("pass")}

        <a href="#">Forgot your password?</a>

        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
