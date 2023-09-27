import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Link } from 'react-router-dom';
import userSchedule from "../../assets/user-schedule.png";
import userEmployees from "../../assets/user-employees.png";
import userGenerate from "../../assets/user-generate.png";

function UserHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-background2 flex flex-col p-5">
        <div className="md:flex m-3">
          <Link to="/employees" className="text-background1 font-title font-bold text-5xl uppercase no-underline lg:w-1/3">
            <div className="bg-background2 hover:bg-primaryT border-2 border-background1 rounded-xl p-4 mb-4 relative flex flex-col items-center ml-3 mr-3 my-auto shadow-lg">
              <p>Employees</p>
              <img src={userEmployees} alt="employees" className="w-[200px] h-[200px]" />
            </div>
          </Link>
          <Link to="/employees" className="text-background1 font-title font-bold text-5xl uppercase no-underline lg:w-1/3">
            <div className="bg-background2 hover:bg-primaryT border-2 border-background1 rounded-xl p-4 mb-4 relative flex flex-col items-center ml-3 mr-3 my-auto shadow-lg">
              <p>Shifts</p>
              <img src={userSchedule} alt="calendar" className="w-[200px] h-[200px]" />
            </div>
          </Link>
          <Link to="/generate-shifts" className="text-background1 font-title font-bold text-5xl uppercase no-underline lg:w-1/3">
            <div className="bg-background2 hover:bg-primaryT border-2 border-background1 rounded-xl p-4 relative flex flex-col items-center ml-3 mr-3 my-auto shadow-lg">
              <p>Generate shifts</p>
              <img src={userGenerate} alt="generate" className="w-[200px] h-[200px]" />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserHome;
