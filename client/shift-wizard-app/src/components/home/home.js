import LandingPage from './landing-page';
import About from './about';
import Paths from './paths';
import Contact from './contact';
import ShiWiLogo from '../../assets/ShiWiLogo2.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='bg-background1 absolute w-full'>
      <Link to='/'>
        <img src={ShiWiLogo} alt='logo' className='m-2 w-[100px]' />
      </Link>
      <LandingPage />
      <About />
      <Paths />
      <Contact />
    </div>
  )
}

export default Home;