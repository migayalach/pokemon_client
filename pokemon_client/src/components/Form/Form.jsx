// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";

// LIBRARY

//REDUX

// JAVASCRIP
import loginValidate from "../../validations/loginValidate";

// STYLESHEET'S

function Form() {
  const [passwordView, setPasswordView] = useState(false);
  const [errors, setErrors] = useState({});
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleDataInput = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...loginValidate({
        ...inputData,
        [event.target.name]: event.target.value,
      }),
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    alert("golis");
  };

  useEffect(() => {}, []);

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={inputData.email}
          onChange={handleDataInput}
          placeholder="mike@gmail.com"
          className="text-black"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type={passwordView ? "text" : "password"}
          id="password"
          name="password"
          value={inputData.password}
          onChange={handleDataInput}
          placeholder="holaMundo@1"
          className="text-black"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <button type="button" onClick={() => setPasswordView(!passwordView)}>
          {passwordView ? "Ocultar" : "Mostrar"} contraseña
        </button>
      </div>
      {!Object.keys(errors).length && inputData.email && inputData.password && (
        <button type="submit">Login</button>
      )}
    </form>
  );
}

export default Form;
