import { Link } from 'react-router-dom';

function HomeFooter() {
    return (
      <div className='bg-tertiaryT flex flex-col items-center justify-center h-full bottom-0 pt-3'>
        <p className='text-background2 font-body font-bold text-md mt-0.1 mb-2'>
          Copyright<span className='text-primaryT font-links font-bold text-md mx-2 pt-3'>©</span>2023 Anastasia Adamoudi
        </p>
        <div className='text-center mb-3 mt-0.1'>
        {/* <Link to='/contact' className='text-primaryT hover:bg-secondaryT font-links font-bold text-sm no-underline'>
          Contact
        </Link>
        <span className='text-background2 font-links font-bold text-md mx-2'>|</span> */}
          <Link to='/about' className='text-primaryT hover:bg-secondaryT font-links font-bold text-sm no-underline'>
            Privacy Policy
          </Link>
          <span className='text-background2 font-links font-bold text-md mx-2'>|</span>
          <Link to='/auth' className='text-primaryT hover:bg-secondaryT font-links font-bold text-sm no-underline'>
            Web Accessibility Statement
          </Link>
        </div>
      </div>
    )
    };

export default HomeFooter;