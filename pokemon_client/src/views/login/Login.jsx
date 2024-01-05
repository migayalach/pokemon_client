// COMPONET'S
import Form from "../../components/Form/Form";

// HOOK'S
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { loginUser } from "../../redux/actions";

// JAVASCRIP

// STYLESHEET'S

function Login({ accessPage }) {
  const dispatch = useDispatch();

  const dataDispatch = async (data) => {
    const responseLogin = dispatch(loginUser(data));
    // console.log(responseLogin);
    // accessPage(true);
  };

  return (
    <div>
      <h1>Login</h1>
      <Form dataDispatch={dataDispatch} />
    </div>
  );
}

export default Login;
