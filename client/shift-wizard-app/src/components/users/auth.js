import Footer from "../footer/footer";
import { useState } from "react";

function Auth() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-background2 grid grid-cols-1 lg:grid-cols-2 gap-2 flex-grow">
        <div className="flex flex-col justify-center items-center p-5">
          <div className="bg-background2 border-2 border-background1 rounded-xl p-4 w-[80%] relative flex flex-col items-center">
            <Login />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5">
          <div className="bg-background2 border-2 border-background1 rounded-xl p-4 w-[80%] relative flex flex-col items-center">
            <Register />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      label="Login"
    />
  );
}

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      label="Register"
    />
  );
}

function Form({ username, password, setUsername, setPassword, label }) {
  return (
      <form>
      <div className="flex flex-col items-center">
        <h1 className='text-background1 font-title font-bold text-6xl mt-2'>{label}</h1>
        <div className="mb-2 mt-2 flex items-center">
          <label htmlFor="username" className='pr-2'>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter your username"
            id="username"
            className="w-full md:w-full border rounded-md py-2 px-3 text-body"
          />
        </div>
        <div className="mb-2 mt-2 flex items-center">
          <label htmlFor="password" className='pr-2'>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            id="password"
            className="w-full md:w-full border rounded-md py-2 px-3 text-body"
          />
        </div>
        <button type="submit" className='bg-secondaryT hover:bg-tertiaryT mt-3 font-links font-bold uppercase text-xs sm:text-sm md:text-md lg:text-lg text-background2 pt-1.5 pb-1.5 pl-12 pr-12 rounded-xl border-2 border-secondaryT'>{label}</button>
        </div>
      </form>
  );
};

export default Auth;