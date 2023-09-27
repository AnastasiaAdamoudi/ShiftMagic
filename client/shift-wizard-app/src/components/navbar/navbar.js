import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ShiWiLogo from "../../assets/ShiWiLogo2.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

function Navbar() {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    removeCookie("access_token", { path: "/" });
    navigate("/");
  };

  return (
    <nav className={"sticky top-0 z-50 bg-background1 shadow-xl"}>
      <div className="flex w-full mx-auto justify-between gap-20">
        {/* beginning of flex div */}
        <div className="flex items-center justify-start">
          {/* beginning of left side div */}
          <div className="flex items-center gap-2 ml-2 mr-2">
            <Link
              to="/user-home"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img src={ShiWiLogo} alt="logo" className="w-[50px] md:w-[60px] h-auto" />
            </Link>
          </div>
          <div className="flex align-middle">
            <p className="text-primaryT text-[18px] font-bold cursor-pointer md:block hidden no-underline">
              Shift Magic
            </p>
          </div>
        </div>
        {/* end of left side div */}
        <div className="flex items-center justify-end">
          {/* beginning of right side div */}
          <div className="hidden md:flex flex-row gap-10">
            <Link to="/display-employees">
              <div
                key="display-employees"
                className={`${
                  active === "display-employees"
                    ? "text-white underline cursor-pointer"
                    : "text-primaryT no-underline cursor-pointer"
                } hover:text-secondaryT no-underline
                  text-[18px]
                  font-bold`}
                onClick={() => {
                  setActive("display-employees");
                  window.scrollTo(0, 0);
                }}
              >
                Employees
              </div>
            </Link>
            <Link to="/shift-options-form">
              <div
                key="shift-options-form"
                className={`${
                  active === "shift-options-form"
                    ? "text-white underline cursor-pointer"
                    : "text-primaryT no-underline cursor-pointer"
                } hover:text-secondaryT no-underline
                  text-[18px]
                  font-bold`}
                onClick={() => {
                  setActive("shift-options-form");
                  window.scrollTo(0, 0);
                }}
              >
                Shifts
              </div>
            </Link>
            <Link to="/">
              <div
                key="logout"
                className={`${
                  active === "logout"
                    ? "text-white underline cursor-pointer"
                    : "text-primaryT no-underline cursor-pointer"
                } hover:text-secondaryT no-underline
                  text-[18px]
                  font-bold
                  pr`}
                onClick={() => {
                  setActive("logout");
                  window.scrollTo(0, 0);
                  logout();
                }}
              >
                Login/Register
              </div>
            </Link>
          </div>
          <div className="md:hidden flex flex-1 justify-end items-center gap-2">
            <img
              src={mobile ? close : menu}
              alt="menu"
              className="w-10 h-auto cursor-pointer object-contain"
              onClick={() => setMobile(!mobile)}
            />
            {/* mobile menu button */}
            <div
              className={`${!mobile ? "hidden" : "flex"}
                        absolute right-0 top-20 p-6 min-w-[140px] mx-4 my-2
                        z-10 rounded-xl flex-col justify-center
                        items-center gap-10 bg-background1`}
            >
              {/* mobile menu */}
              <div className="flex flex-col justify-end items-start gap-4">
                <Link to="/display-employees">
                  <div
                    key="display-employees"
                    className={`${
                      active === "display-employees"
                        ? "text-secondaryT underline cursor-pointer"
                        : "text-primaryT no-underline cursor-pointer"
                    } hover:text-tertiaryT text-[16px] font-medium`}
                    onClick={() => {
                      setMobile(false);
                      setActive("display-employees");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Employees
                  </div>
                </Link>
                <Link to="/shift-options-form">
                  <div
                    key="shift-options-form"
                    className={`${
                      active === "shift-options-form"
                        ? "text-secondaryT underline cursor-pointer"
                        : "text-primaryT no-underline cursor-pointer"
                    } hover:text-tertiaryT text-[16px] font-medium`}
                    onClick={() => {
                      setMobile(false);
                      setActive("shift-options-form");
                      window.scrollTo(0, 0);
                    }}
                  >
                    Shifts
                  </div>
                </Link>
                <Link to="/">
                  <div
                    key="logout"
                    className={`${
                      active === "logout"
                        ? "text-secondaryT underline cursor-pointer"
                        : "text-primaryT no-underline cursor-pointer"
                    } hover:text-tertiaryT text-[16px] font-medium`}
                    onClick={() => {
                      setMobile(false);
                      setActive("logout");
                      window.scrollTo(0, 0);
                      logout();
                    }}
                  >
                    Login/Register
                  </div>
                </Link>
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
