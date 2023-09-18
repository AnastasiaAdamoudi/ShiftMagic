import wizardHat from '../../assets/wizardHat.png';
import magic from '../../assets/magic.png';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='bg-background1 relative h-screen w-full mx-auto flex items-center justify-center'>
        <div className='relative flex items-center justify-center'>
        <img
          src={wizardHat}
          alt='wizard hat'
          className='absolute w-[250px] top-[-110%] align-middle
                    sm:w-[300px] sm:top-[-115%] sm:align-middle
                    md:w-[310px] md:right-[-3%] md:top-[-100%]
                    lg:w-[320px] lg:right-[-1%] lg:top-[-90%]
                    xl:w-[330px] xl:right-[1%] xl:top-[-85%]
                    z-1'
        />
        <img
          src={magic}
          alt='magic'
          className='absolute w-[400px] top-[-40%] align-middle
                    sm:w-[500px] sm:top-[-45%] sm:align-middle 
                    md:w-[600px] md:right-[5%] md:top-[-57%]
                    lg:w-[700px] lg:right-[5%] lg:top-[-65%]
                    xl:w-[800px] xl:right-[2%] xl:top-[-70%]
                    transform rotate-[-45deg] md:rotate-0
                    z-0'
        />
        <div className='text-center z-10'>
          <h1 className='text-primaryT font-title font-bold
                        text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[160px]'
                        style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 5)' }}
                        >
                        Shift Wizard
          </h1>
          <h2 className='text-background2 font-body font-bold
                        text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                        uppercase'
                        style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 5)' }}
                        >
                        Smooth employee scheduling
          </h2>
          <div className='flex justify-center mt-10'>
            <Link to='/auth'>
            <button className='bg-secondaryT  hover:bg-tertiaryT mt-2 mr-5 font-links font-bold uppercase
                              text-xs sm:text-sm md:text-md lg:text-lg text-background2
                              pt-1.5 pb-1.5 pl-12 pr-12 rounded-xl border-2 border-secondaryT'
                              >
                              log in
            </button>
            </Link>
            <Link to='/guest-combined-form'>
            <button className='bg-background1 hover:bg-tertiaryT mt-2 ml-5 font-links font-bold uppercase
                              text-xs sm:text-sm md:text-md lg:text-lg text-background2
                              pt-1.5 pb-1.5 pl-12 pr-12 rounded-xl border-2 border-secondaryT'>
                              guest
            </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default LandingPage;