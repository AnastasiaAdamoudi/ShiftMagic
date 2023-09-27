import Footer from '../footer/footer';
import { useState } from 'react';

function Auth () {
    return (
      <div className="auth">
        <Login />
        <Register />
        <Footer />
      </div>
   );
};
  
function Login () {
    return (
      <div className="login">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
};

function Register () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div className="register-container ">
        <form>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              id="username"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>
          <button type="submit">Register</button> 
        </form>
      </div>
    );
}