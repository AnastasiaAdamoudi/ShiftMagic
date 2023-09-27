import LandingPage from './landing-page';
import About from './about';
import Paths from './paths';
import ContactInfoDark from '../contact/contact-info-dark';
import HomeFooter from '../footer/home-footer';
import Navbar from '../navbar/navbar';

function Home() {
  return (
    <div className='bg-background1 absolute w-full'>
      <Navbar />
      <LandingPage />
      <About />
      <Paths />
      <ContactInfoDark />
      <HomeFooter />
    </div>
  )
}

export default Home;