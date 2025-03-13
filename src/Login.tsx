import  { useState } from 'react';

interface LoginProps {
    onLogin: (token: string) => void;
  }

const Login = ({ onLogin }:LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        onLogin(data.token);
        setEmail("");
        setPassword("")
      } else {
        alert('Invalid credentials');
        setEmail("");
        setPassword("")
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>Login</button>
        <div><br /> eve.holt@reqres.in</div>
      </div>
    </div>
  );
};

export default Login;