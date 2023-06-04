import { React, useState, useEffect, useRef } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import "./UserForm.css";

export default function UserFrom() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirlPassword] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userFormErrors, setUserFormErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleUserFormSubmit(inputFieldName, inputFieldValue) {
    setUserData({ ...userData, [inputFieldName]: inputFieldValue });

    switch (inputFieldName) {
      case "userName":
        if (inputFieldValue.length < 3) {
          setUserFormErrors({
            ...userFormErrors,
            userName: "User Name must be at least 3 characters",
          });
        } else {
          setUserFormErrors({
            ...userFormErrors,
            userName: "",
          });
        }
        break;
      case "email":
        if (inputFieldValue.length < 3) {
          setUserFormErrors({
            ...userFormErrors,
            email: "Email must be at least 3 characters",
          });
        } else {
          setUserFormErrors({
            ...userFormErrors,
            email: "",
          });
        }
        break;
      case "password":
        if (inputFieldValue.length < 3) {
          setUserFormErrors({
            ...userFormErrors,
            password: "Password must be at least 3 characters",
          });
        } else {
          setUserFormErrors({
            ...userFormErrors,
            password: "",
          });
        }
        break;
      case "confirmPassword":
        if (inputFieldValue.length < 3) {
          setUserFormErrors({
            ...userFormErrors,
            confirmPassword: "Confirm Password must be at least 3 characters",
          });
        } else if (inputFieldValue !== userData.password) {
          setUserFormErrors({
            ...userFormErrors,
            confirmPassword: "Confirm Password must match Password",
          });
        } else {
          setUserFormErrors({
            ...userFormErrors,
            confirmPassword: "",
          });
        }
        break;

      default:
        break;
    }
  }

  function submitData(e) {
    e.preventDefault();

    document.forms["userForm"].reset();

    console.log("submitData", userData);
  }
  return (
    <div>
      UserForm Component
      <hr />
      {/* Data from UserForm Component:
      <p>Name: {userData.userName}</p>
      <p>Email: {userData.email}</p>
      <p>Password: {userData.password}</p>
      <p>Confirm Password: {userData.confirmPassword}</p>
      <hr /> */}
      <form
        style={{ width: "50%", margin: "auto" }}
        id="userForm"
        className="userForm"
        onSubmit={submitData}
        name="userForm"
      >
        <label htmlFor="userName" className="form-lable ">
          UserName
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter your new name"
          className={`form-control ${
            userFormErrors.userName ? "border-danger" : ""
          }`}
          onBlur={(e) => handleUserFormSubmit(e.target.name, e.target.value)}
        />
        <p className="text-danger error"> {userFormErrors.userName}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control`}
          placeholder="Enter your new email"
          onBlur={(e) => handleUserFormSubmit(e.target.name, e.target.value)}
        />
        <p className="text-danger error"> {userFormErrors.email}</p>

        <label htmlFor="password">Password</label>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className={`form-control`}
            placeholder="Enter your new password"
            onBlur={(e) => handleUserFormSubmit(e.target.name, e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <BiHide /> : <BiShow />}
          </button>
        </div>
        <p className="text-danger error"> {userFormErrors.password}</p>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="input-group">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            className={`form-control`}
            placeholder="Confirm your new password"
            onBlur={(e) => handleUserFormSubmit(e.target.name, e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowConfirlPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <BiHide /> : <BiShow />}
          </button>
        </div>
        <p className="text-danger error"> {userFormErrors.confirmPassword}</p>

        <button
          type="submit"
          className="btn btn-success"
          disabled={
            userFormErrors.userName ||
            userFormErrors.email ||
            userFormErrors.password ||
            userFormErrors.confirmPassword
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}
