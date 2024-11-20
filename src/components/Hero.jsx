import { SpacemanCanvas } from ".";
import { useState, useEffect } from 'react';

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = ({ isMobile }) => {
  return (
    <div className={`relative cursor-default font-medium text-white
      ${isMobile ? 'text-[16px] leading-tight mt-1' : 'text-[14px] xs:text-[18px] sm:text-[26px] md:text-[32px] 2xl:text-[62px] leading-[28px] 2xl:leading-[36px] w-full flex justify-center items-center'}
    `}>
      {isMobile ? (
        <div className="text-white/80">AI/ML Enthusiast</div>
      ) : (
        <div className="absolute inset-0 top-[-34px] sm:top-[-14px] lg:top-[-4px] flex flex-col">
          <div className="text first absolute left-1 md:left-2 2xl:left-4 flex" aria-label="Software Developer">
            {produceSpans("Software Developer", "animate-textRotate1")}
          </div>
          <div className="text second absolute left-1 md:left-2 2xl:left-4 flex" aria-label="AI/ML Enthusiast">
            {produceSpans("AI/ML Enthusiast", "animate-textRotate2")}
          </div>
        </div>
      )}
    </div>
  );
};

const Hero = ({ scrollContainer }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <section className="parallax">
        <div className="parallax__content w-full mx-auto flex flex-col z-10">
          <div className="flex flex-col px-6 pt-11">
            <div className='font-bold text-[22px] xs:text-[26px] sm:text-[30px] text-white mb-8 leading-tight streaky-glow'>
              Transforming ideas<br />
              into elegant solutions<br />
              through code.
            </div>
            
            <div>
              <h1 className='font-medium text-white text-[42px] xs:text-[48px] sm:text-[56px] leading-tight tracking-wider'>
                PARAG<br />JAIN
              </h1>
              <Position isMobile={true} />
            </div>
          </div>
        </div>

    
        <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
        <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
        <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
        <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
        <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
        <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />

        <SpacemanCanvas scrollContainer={scrollContainer} />
      </section>
    );
  }

  return (
    <section className="parallax">
      <div className="parallax__content w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-row items-start z-10">
        <div className="flex-1 mb-0 absolute top-[10%]">
          <h1 className='font-medium text-white text-[64px] 2xl:text-[120px] whitespace-nowrap mb-[-20px]'>
            PARAG JAIN
          </h1>
          <Position isMobile={false} />
        </div>
        
        <div className="flex-1 flex justify-end mt-10 2xl:mt-0">
          <div className='font-bold text-[36px] 2xl:text-[46px] leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left'>
            Transforming ideas <br/> into elegant solutions through code.
          </div>
        </div>
      </div>


      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;