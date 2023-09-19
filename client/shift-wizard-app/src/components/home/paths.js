import { Link } from 'react-router-dom';

function Paths() {
  return (
    <div className='bg-background2 flex flex-col justify-between'>
      {/* Login path div */}
      <div className='align-top mt-5 ml-3 mb-3'>
        <h1 className='text-background1 font-title font-bold text-6xl'>LOGIN path</h1>
      </div> {/* End of login path div */}
      
      {/* Steps div */}
      <div className='mx-auto flex items-center justify-center align-middle max-w-[75%] sm:max-w-[75%] md:max-w-[75%] lg:max-w-[95%] xl:max-w-[85%]'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="flex items-center justify-start space-x-2 border-2 border-background2 p-2">
              <h2 className='text-8xl font-semibold text-background1'>{index + 1}.</h2>
              <div
                className='bg-background2 border-2 border-background1 rounded-xl p-4 w-full
                            sm:w-[calc(50% - 0.5rem)] md:w-[calc(33.33% - 0.67rem)] sm:h-[calc(50% - 0.5rem)] md:h-[calc(33.33% - 0.67rem)] relative'
                            >
                <p className='text-md text-body ml-4'>
                  {index === 0
                    ? "Sign Up: Create a unique username and password for your account."
                    : index === 1
                    ? "Employee Database: Easily add, update, or delete employee information. Your data is securely stored, eliminating the need for redundant data entry."
                    : "Schedule Creation: When it's time to generate a new weekly schedule, simply input shift details and create a schedule hassle-free."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> {/* End of steps div */}
      
      {/* Sign up button div */}
      <div className='align-bottom text-right'>
        <Link to='/auth'>
          <button className='bg-secondaryT hover:bg-tertiaryT font-links font-bold uppercase text-xs sm:text-sm md:text-md lg:text-lg text-background2
                                pt-1.5 pb-1.5 pl-12 pr-12 m-4 rounded-xl border-2 border-secondaryT'
                                >
            Sign Up Now
          </button>
        </Link>
      </div> {/* End of sign up button div */}
    </div>
  );
}

export default Paths;
