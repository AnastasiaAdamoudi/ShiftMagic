import HomeFooter from "../footer/home-footer";
import Navbar from "../navbar/navbar";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function Auth() {
  return (
    <div className="flex flex-col min-h-screen">
  <Navbar />
    <div className="flex-grow bg-background2 flex flex-col p-5">
      <div className="md:flex flex-grow justify-center items-center">
        <div className="text-background1 md:w-1/2 flex-grow">
          <div className="bg-background border-2 border-background1 rounded-xl p-4 relative flex flex-col items-center m-2 shadow-md md:shadow-lg lg:shadow-xl xl:shadow-xl">
            <Login />
          </div>
        </div>
        <div className="text-background1 md:w-1/2 flex-grow">
          <div className="bg-background border-2 border-background1 rounded-xl p-4 relative flex flex-col items-center m-2 shadow-md md:shadow-lg lg:shadow-xl xl:shadow-xl">
            <Register />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Link to="/guest">
          <button
            type="submit"
            className="bg-secondary2 hover:bg-tertiaryT font-links font-bold uppercase
                      text-xs sm:text-sm md:text-md lg:text-lg text-background1 hover:text-background2
                      pt-1.5 pb-1.5 pl-12 pr-12 rounded-xl border-2 border-background1
                      shadow-md md:shadow-lg lg:shadow-xl xl:shadow-xl"
          >
            Continue as Guest
          </button>
        </Link>
      </div>
    </div>
  <HomeFooter />
</div>

  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [_, setCookies] = useCookies(["access_token"]); // we don't need the cookie value, so we can use _ to ignore it in the destructuring, this will be used to set the cookie later in order to store the access token

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      setCookies("access_token", data.access_token, { path: "/user-home" });
      navigate("/user-home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      label="Login"
      onSubmit={onSubmit}
    />
  );
}

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      alert("Registered successfully! Now please login.");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      label="Register"
      onSubmit={onSubmit}
    />
  );
}

function Form({
  username,
  password,
  setUsername,
  setPassword,
  label,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col items-center">
        <h1 className="text-background1 font-title font-bold text-6xl mt-2">
          {label}
        </h1>
        <div className="mb-2 mt-2 flex items-center">
          <label htmlFor="username" className="pr-2">
            Username
          </label>
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
          <label htmlFor="password" className="pr-2">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            id="password"
            className="w-full md:w-full border rounded-md py-2 px-3 text-body"
          />
        </div>
        <button
          type="submit"
          className="bg-secondaryT hover:bg-tertiaryT mt-3 font-links font-bold uppercase
                  text-xs sm:text-sm md:text-md lg:text-lg text-background2
                  pt-1.5 pb-1.5 pl-12 pr-12 rounded-xl border-2 border-secondaryT"
        >
          {label}
        </button>
      </div>
    </form>
  );
}

export default Auth;
