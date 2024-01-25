import { useSelector } from 'react-redux'
import { ReactSVG } from "react-svg";
import logo from '/icons/logo.svg'
import './Home.css'

const Home = () => {
  const langData = useSelector(state => state.lang.data)

  return (
    <section id={langData.home.id} className='relative grid grid-rows-[1fr,auto] justify-center items-center min-h-[calc(100vh-theme(spacing.navbar))] pb-[calc(theme(minHeight.aboutme)/2)] bg-primary-light'>
      {/* WALLPAPER */}
      <div className='absolute inset-0 flex justify-end opacity-30 bg-white'>
        <div className='home-wallpaper__image hidden md:block w-full h-full bg-fixed bg-right bg-contain bg-no-repeat' style={{backgroundImage: `url('${langData.general.wallpapers.home}')`}}></div>
      </div>

      {/* HERO */}
      <div className='section-container relative my-[calc(theme(spacing.navbar)*2)] md:mt-[calc(theme(spacing.navbar)*3)]'>
        <h1 className='mt-2 md:mt-1 lg:mt-0 text-center text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-tight font-bold tracking-widest text-white uppercase'>
          { langData.home.title.line1 }
          <br />
          { langData.home.title.line2 }
          <br />
          { langData.home.title.line3 }<span className='text-tertiary'>.</span>
        </h1>
        <h2 className='h3'>
          { langData.home.subtitle }
        </h2>
      </div>
      {/* ABOUT ME */}
      <div className='z-[1] absolute left-0 right-0 -bottom-[calc(theme(minHeight.aboutme)/2)] flex justify-center w-full px-3 sm:px-4 md:px-5'>
        <div className='flex flex-col items-center justify-center max-w-3xl min-h-aboutme gap-y-4 md:gap-y-6 lg:gap-y-8 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-primary text-white'>
          <ReactSVG src={logo} className='w-16 sm:w-[4.5rem] md:w-20 lg:w-24 mx-auto text-tertiary' />
          <p className='p1 text-center leading-loose -tracking-tighter text-white'>
            { langData.home.about_me }
          </p>
          <a href={ langData.home.curriculum.link } target='_blank' rel='referrer' className='p1 border border-tertiary px-7 py-2 hover:bg-tertiary uppercase duration-300'>
            { langData.home.curriculum.text }
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home

// calc(theme(minHeight.aboutme)/2)