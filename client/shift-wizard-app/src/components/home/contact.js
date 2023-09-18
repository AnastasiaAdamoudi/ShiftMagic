import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='bg-background1 relative h-screen w-full mx-auto flex items-center justify-center'>
            <Link to='/'>
            <button className='bg-secondaryT  hover:bg-tertiaryT mt-10 mr-5 font-links font-bold uppercase
                              text-sm sm:text-md md:text-l lg:text-xl text-background2
                              pt-2 pb-2 pl-14 pr-14 rounded-xl'
                              >
                              contact
            </button>
            </Link>
      </div>
  )
}

export default Contact;