import magicHand from '../../assets/magicHand.png';

function About() {
  return (
    <div className='bg-tertiaryT h-screen flex flex-col justify-center items-center'>
      <img src={magicHand} alt='magic hand'
           className='w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[350px]
                     mb-8 align-middle'
                     />
      <p className='text-background2 font-title font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center w-[80%] sm:w-[70%] md:w-[60%] lg:w-[60%] xl:w-[50%]'>
        With user-friendly features, seamless integration, and robust support,
        Shift Magic is here to streamline your scheduling needs.
        Say goodbye to scheduling headaches and hello to optimized productivity.
        Elevate your workforce management with this app today!
      </p>
    </div>
  )
}

export default About;
