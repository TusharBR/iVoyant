import { useState } from "react";

interface InputProps {
  handleLogin: (uname: string, pword: string) => void;
}

const Logininput = ({ handleLogin }: InputProps) => {
  const [coit, cnit] = useState({ username: "", password: "" });

  const chandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cnit({ ...coit, [e.target.name]: e.target.value });
  };

  return (
<>
<div className="logincontainer inputcontainer">
      <h4 style={{ margin: 0 }}>Login</h4>
      <div>
        <label className="labels" >Username:</label>
        <input  name="username" type="text" onChange={chandleChange} value={coit.username} required />
      </div>

      <div>
        <label className="labels">Password:</label>
        <input
          name="password"
          type="password"
          onChange={chandleChange}
          value={coit.password}
          pattern="^[A-Z].{5}$"
          title="Password must be 6 characters long, start & end with an uppercase letter."
          className={coit.password && !/^[A-Z].{5}$/.test(coit.password) ? "error-border" : ""}
        />
      </div>

      {/* Reserved space for error message to prevent shifting */}
      <span className={`error-message ${coit.password && !/^[A-Z].{5}$/.test(coit.password) ? "show" : ""}`}>Required 6 characters,start with uppercase.
      </span>

      <button
        style={{ marginTop: "10px" }}
        onClick={() => handleLogin(coit.username, coit.password)}
        disabled={!(coit.username.trim() !== "" && coit.password.trim() !== "" && /^[A-Z].{5}$/.test(coit.password))}
      >
        Login
      </button>
    </div>
</>
  );
};

export default Logininput;
