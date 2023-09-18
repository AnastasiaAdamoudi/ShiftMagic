import wizardHat from '../../assets/wizardHat.png';
import magic from '../../assets/magic.png';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='bg-background1 relative h-screen w-full mx-auto flex items-center justify-center'>
        <div className='flex items-center justify-center'>
        <img
          src={wizardHat}
          alt='wizard hat'
          className='absolute w-[200px] top-[-40px] right-[5%]
                    sm:w-[320px] sm:right-[23%]
                    md:w-[380px] md:right-[15%]
                    lg:w-[460px] lg:right-[5%] lg:top-[-120px]
                    xl:w-[520px] xl:right-[25%]
                    z-1'
        />
        <img
          src={magic}
          alt='magic'
          className='absolute w-[400px] top-[80px] right-[10%]
                    sm:w-[600px] sm:right-[7%] -rotate-45
                    md:w-[700px] md:right-[20%] rotate-0
                    lg:w-[800px] lg:right-[25%] rotate-0
                    xl:w-[1000px] xl:right-[30%] rotate-0
                    z-0'
        />
        </div>
        <div className='text-center top-[140px] z-10'>
          <h1 className='text-primaryT font-title font-bold
                        text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px]'
                        style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 5)' }}
                        >
                        Shift Wizard
          </h1>
          <h2 className='text-background2 font-body font-bold
                        text-xl sm:text-2xl md:text-3xl lg:text-4xl
                        uppercase'
                        style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 5)' }}
                        >
                        Smooth employee scheduling
          </h2>
          <div className='flex justify-center mt-10'>
            <Link to='/auth'>
            <button className='bg-secondaryT  hover:bg-tertiaryT mt-10 mr-5 font-links font-bold uppercase
                              text-sm sm:text-md md:text-l lg:text-xl text-background2
                              pt-2 pb-2 pl-14 pr-14 rounded-xl'
                              >
                              log in
            </button>
            </Link>
            <Link to='/guest-combined-form'>
            <button className='bg-background1 hover:bg-tertiaryT mt-10 ml-5 font-links font-bold uppercase
                              text-sm sm:text-md md:text-l lg:text-xl text-background2
                              pt-2 pb-2 pl-14 pr-14 rounded-xl border-2 border-secondaryT'>
                              guest
            </button>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default LandingPage;