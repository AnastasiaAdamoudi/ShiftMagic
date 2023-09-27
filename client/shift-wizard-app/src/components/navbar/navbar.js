import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ShiWiLogo from "../../assets/ShiWiLogo2.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

function NavbarLink({ to, label, active, setActive, onClick }) {
  const textDecoration = "none";
  const isCurrent = active === to;

  const linkStyle = {
    textDecoration,
    marginRight: "20px",
  };

  return (
    <Link to={to} style={linkStyle}>
      <div
        key={to}
        className={`${
          isCurrent ? "text-white underline cursor-pointer" : "text-primaryT no-underline cursor-pointer"
        } hover:text-secondaryT no-underline text-[18px] font-bold`}
        onClick={() => {
          setActive(to);
          window.scrollTo(0, 0);
          onClick && onClick();
        }}
      >
        {label}
      </div>
    </Link>
  );
}

function Navbar() {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);

  const [cookies, setCookies, removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    console.log("logout clicked in navbar");
    setCookies("access_token", "", { path: "/" });
    removeCookie("access_token", { path: "/" });
    navigate("/");
  };

  return (
    <nav className={"sticky top-0 z-50 bg-background1 shadow-xl"}>
      <div className="flex w-full mx-auto justify-between gap-10">
        {/* beginning of flex div */}
        <div className="flex items-center justify-start">
          {/* beginning of left side div */}
          <div className="flex items-center gap-2 ml-2 mr-2 uppercase font-title">
          <img src={ShiWiLogo} alt="logo" className="w-[50px] md:w-[60px] h-auto cursor-pointer object-contain" />
            <NavbarLink to="/user-home" label="Shift Magic" active={active} setActive={setActive} />
          </div>
        </div>
        {/* end of left side div */}
        <div className="flex items-center justify-end">
          {/* beginning of right side div */}
          <div className="hidden md:flex flex-row font-links gap-2">
            <NavbarLink to="/user-home" label="Home" active={active} setActive={setActive} />
            <NavbarLink to="/display-employees" label="Employees" active={active} setActive={setActive} />
            <NavbarLink to="/shift-options-form" label="Shifts" active={active} setActive={setActive} />
            {!cookies.access_token ? (
  <NavbarLink to="/auth" label="Login/Register" active={active} setActive={setActive} />
) : (
  <NavbarLink to="/" label="Logout" active={active} setActive={setActive} onClick={logout} />
)}

          </div>
          <div className="md:hidden flex flex-1 justify-end items-center gap-2">
            <img
              src={mobile ? close : menu}
              alt="menu"
              className="w-10 h-auto mr-2 cursor-pointer object-contain"
              onClick={() => setMobile(!mobile)}
            />

            {/* mobile menu button */}
            <div
              className={`${!mobile ? "hidden" : "flex"} absolute top-10 p-6 min-w-[140px] my-2 z-10 rounded-xl
                        flex-col justify-center items-center gap-10 bg-background1`}
            >
              {/* mobile menu */}
              <div className="flex flex-col justify-end items-start gap-4 font-links">
                <NavbarLink to="/user-home" label="Home" active={active} setActive={setActive} onClick={() => setMobile(false)} />
                <NavbarLink to="/display-employees" label="Employees" active={active} setActive={setActive} onClick={() => setMobile(false)} />
                <NavbarLink to="/shift-options-form" label="Shifts" active={active} setActive={setActive} onClick={() => setMobile(false)} />
                <NavbarLink to="/" label="Login/Register" active={active} setActive={setActive} onClick={() => { setMobile(false); logout(); }} />
              </div>
            </div>
            {/* end of mobile menu */}
          </div>
          {/* end of mobile menu button */}
        </div>
        {/* end of right side */}
      </div>
      {/* end of flex div */}
    </nav>
  );
}

export default Navbar;
