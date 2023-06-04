import React from "react";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
function UserData() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const nameRef = useRef();
  const emailRef = useRef();
  
  return (
    <div>
      <h1>Change UserName</h1>
      <p>User Data:</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Password: {userData.password}</p>
      <p>Confirm Password: {userData.confirmPassword}</p>
      <hr />

      <label htmlFor="userName">UserName</label>
      <input
        type="text"
        id="userName"
        ref={nameRef}
        placeholder="Enter your new name"
      />
      <Button
        variant="primary"
        onClick={(e) =>
          setUserData({ name: nameRef.current.value, ...userData })
        }
      >
        Change UserName
      </Button>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        ref={emailRef}
        placeholder="Enter your new email"
      />
      <Button
        variant="primary"
        onClick={() =>
          setUserData({
            email: emailRef.current.value,
            ...userData,
          })
        }
      >
        Change Email
      </Button>
    </div>
  );
}

export default UserData;
