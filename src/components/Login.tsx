import { useState } from "react";
import "../styles/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { createuser } from "../slices/loginpage";
import { useNavigate } from "react-router-dom";
import { RootState } from "../Store";
import Logininput from "./Logininput";
import Navbar from "./Navbar";

const Login = () => {
  const dispatch = useDispatch();
  const [oit, nit] = useState({ username: "", name: "", mail: "", password: "", isadmin: "false" });
  const [, cnit] = useState({ username: "", password: "" });
  const [loginToggle, setloginToggle] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    nit({ ...oit, [e.target.name]: e.target.value });
  };

  function createcustomer() {
    dispatch(createuser(oit));
    nit({ username: "", name: "", mail: "", password: "", isadmin: "false" });
    setloginToggle(!loginToggle);
  }

  const users = useSelector((state: RootState) => state.credentials.users);
  const navg = useNavigate();

  const handleLogin = (uname: string, pword: string) => {
    const foundUser = users.find(
      (user: { username: string; password: string; isadmin: string }) =>
        user.username === uname && user.password === pword && user.isadmin === "false"
    );
    if (foundUser) {
      cnit({ username: "", password: "" });
      navg("/Customermp");
    } else {
      alert("Invalid credentials");
      cnit({ username: "", password: "" });
    }
  };

  return (
    <>
    <Navbar/>
      <div className="maincontainers">
        {loginToggle ? (
          <div>
            <Logininput handleLogin={handleLogin} />
            <div onClick={() => setloginToggle(!loginToggle)} className="toggle-link">
              Don’t have an account? Create account
            </div>
          </div>
        ) : (
          <div className="logincontainer form-container customerform">
            <h4>Create Customer</h4>

            <div>
              <label>Username:</label>
              <input name="username" type="text" onChange={handleChange} value={oit.username} required />
            </div>

            <div>
              <label>Name:</label>
              <input name="name" type="text" onChange={handleChange} value={oit.name} required />
            </div>

            <div>
              <label>Mail:</label>
              <input
                name="mail"
                type="email"
                onChange={handleChange}
                value={oit.mail}
                required
                pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                title="Enter a valid Gmail address (e.g., example@gmail.com)"
                className={oit.mail && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(oit.mail) ? "error-border" : ""}
              />
              <span className={`error-message ${oit.mail && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(oit.mail) ? "show" : ""}`}>
                Enter valid mail address (example@gmail.com)
              </span>
            </div>

            <div>
              <label>Password:</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                value={oit.password}
                required
                pattern="^[A-Z].{5}$"
                title="Password must be 6 characters long, start & end with an uppercase letter."
                className={oit.password && !/^[A-Z].{5}$/.test(oit.password) ? "error-border" : ""}
              />
              <span className={`error-message ${oit.password && !/^[A-Z].{5}$/.test(oit.password) ? "show" : ""}`}>
                Required 6 characters, start with an uppercase.
              </span>
            </div>

            <button
              className="submit-button"
              onClick={createcustomer}
              disabled={
                !(
                  oit.username.trim() !== "" &&
                  oit.name.trim() !== "" &&
                  oit.mail.trim() !== "" &&
                  oit.password.trim() !== "" &&
                  /^[A-Z].{5}$/.test(oit.password)
                )
              }
            >
              Create Customer
            </button>

            <div onClick={() => setloginToggle(!loginToggle)} className="toggle-link">
              Already have an account? Login
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
