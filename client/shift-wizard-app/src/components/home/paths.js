import { Link } from 'react-router-dom';
import loginPic from '../../assets/loginPic.png';
import guestPic from '../../assets/guestPic.png';

function Paths() {
  return (
    <div className='bg-background2 grid grid-cols-1 lg:grid-cols-2 gap-1'>

      {/* Login path div */}
      <div className='flex flex-col justify-center items-center p-5'>
        <img src={loginPic} alt='login' className='w-[80px] md:w-[100px] lg:w-[100px] xl:w-[100px]' />
        <h1 className='text-background1 font-title font-bold text-6xl mt-4'>LOGIN path</h1>

        <div className='mt-4 mx-auto max-w-[500px]'>
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="flex items-center space-x-2 border-2 border-background2 p-2 mb-4">
              <div className='bg-background2 border-2 border-background1 rounded-xl p-4 w-full relative flex flex-col'>
                <div className="flex items-center space-x-2 mb-2">
                  <h2 className='text-8xl font-semibold text-background1'>{index + 1}.</h2>
                  <p className='text-xl text-body text-center'>
                    {index === 0
                      ? "Sign Up: Create a unique username and password for your account."
                      : index === 1
                      ? "Employee Database: Easily add, update, or delete employee information. Your data is securely stored, eliminating the need for redundant data entry."
                      : "Schedule Creation: When it's time to generate a new weekly schedule, simply input shift details and create a schedule hassle-free."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-4'>
          <Link to='/auth'>
            <button className='bg-secondaryT hover:bg-tertiaryT font-links font-bold uppercase text-xs sm:text-sm md:text-md lg:text-lg text-background2 pt-1.5 pb-1.5 pl-12 pr-12 rounded-xl border-2 border-secondaryT'>
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
      {/* End of login div */}

      {/* Guest path div */}
      <div className='flex flex-col justify-center items-center p-5'>
        <img src={guestPic} alt='guest' className='w-[80px] md:w-[100px] lg:w-[100px] xl:w-[100px]' />
        <h1 className='text-background1 font-title font-bold text-6xl mt-4'>GUEST path</h1>

        <div className='mt-4 mx-auto max-w-[500px]'>
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="flex items-center space-x-2 border-2 border-background2 p-2 mb-4">
              <div className='bg-background2 border-2 border-background1 rounded-xl p-4 w-full relative flex flex-col'>
                <div className="flex items-center space-x-2 mb-2">
                  <h2 className='text-8xl font-semibold text-background1'>{index + 1}.</h2>
                  <p className='text-xl text-body text-center'>
                    {index === 0
                      ? "Quick Start: Enter employee and shift details right away."
                      : index === 1
                      ? "Generate Schedule: Effortlessly create a new weekly schedule with the provided information."
                      : "Limited Access: Please note that if you require another schedule, you'll need to re-enter all employee details since guest users don't have access to our employee database for long-term storage."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-4'>
          <Link to='/auth'>
            <button className='bg-secondaryT hover:bg-tertiaryT font-links font-bold uppercase text-xs sm:text-sm md:text-md lg:text-lg text-background2 pt-1.5 pb-1.5 pl-12 pr-12 rounded-xl border-2 border-secondaryT'>
              Continue as a guest
            </button>
          </Link>
        </div>
      </div>
      {/* End of guest div */}
    </div>
  );
}

export default Paths;
