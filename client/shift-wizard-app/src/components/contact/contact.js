import { Link } from 'react-router-dom';
import magicBox from '../../assets/magicBox.png';

function Contact() {
  return (
    <div className='bg-background1'>
    <div className='align-top mt-5 ml-3 mb-3 text-center'>
    <h1 className='text-background2 font-title font-bold text-6xl'>
      Contact
    </h1>
  </div>
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4'>
        <div className='align-top text-left'>
        <p className='text-background2 font-body font-bold text-lg'>For any inquiries, suggestions for enhancement, or concerns, please
          reach out to me!</p>
        </div>
      <div className='align-top text-right'>
        <img src={magicBox} alt='magic box' className='m-2 w-[200px]' />
        <p className='text-background2 font-body font-bold text-lg'>
          If you’ve had a positive and smooth experience using the app, I
          would greatly appreciate it if you could consider leaving a
          recommendation on my LinkedIn profile.
        </p>
        <button
          className='bg-secondaryT  hover:bg-tertiaryT mt-10 mr-5 font-links font-bold uppercase
                              text-sm sm:text-md md:text-l lg:text-xl text-background2
                              pt-2 pb-2 pl-14 pr-14 rounded-xl'
        >
          linked in
        </button>
      </div>
    </div>
    </div>
  );
}

export default Contact;
