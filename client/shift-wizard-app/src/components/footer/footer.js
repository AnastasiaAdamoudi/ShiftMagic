import { Link } from 'react-router-dom';
import ShiWiLogo from '../../assets/ShiWiLogo2.png';

function Footer() {
  return (
    <div className='bg-tertiaryT flex flex-col items-center justify-center h-full bottom-0'>
      <Link to='/user-home' className='text-center no-underline mt-0.1 mb-0.1'>
        <img src={ShiWiLogo} alt='logo' className='mt-2 w-[100px] mx-auto mb-0.1' />
        <h3 className='text-primaryT font-title font-bold text-md'>Shift Magic</h3>
      </Link>
      <p className='text-background2 font-body font-bold text-md mb-1'>
        Copyright<span className='text-primaryT font-links font-bold text-md mx-2'>©</span>2023 Anastasia Adamoudi
      </p>
      <div className='text-center mt-0.1 mb-3'>
        <Link to='/contact' className='text-primaryT hover:bg-secondaryT font-links font-bold text-sm no-underline'>
          Contact
        </Link>
        <span className='text-background2 font-links font-bold text-md mx-2'>|</span>
        <Link to='/about' className='text-primaryT hover:bg-secondaryT font-links font-bold text-sm no-underline'>
          Privacy Policy
        </Link>
        <span className='text-background2 font-links font-bold text-md mx-2'>|</span>
        <Link to='/auth' className='text-primaryT hover:bg-secondaryT font-links font-bold text-sm no-underline'>
          Web Accessibility Statement
        </Link>
      </div>
    </div>
  );
}

export default Footer;
