import { useSelector } from 'react-redux'
import heroImage from '/images/hero.png'
import './Home.css'

const Home = () => {
  const langData = useSelector(state => state.lang.data)

  return (
    <section id={langData.home.id} className='relative flex justify-center items-center min-h-[calc(100vh-(theme(spacing.navbar)/1.5))] bg-primary-light'>
      <div className='section-overlay section-overlay__home'></div>
      <div className='section-container relative md:mt-[calc(theme(spacing.navbar)*2.8)]'>
        <h1 className='text-center text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-tight font-bold tracking-widest text-white uppercase'>
          { langData.home.title.line1 }
          <br />
          { langData.home.title.line2 }
          <br />
          { langData.home.title.line3 }<span className='text-tertiary'>.</span>
        </h1>
        <h2 className='h3'>{ langData.home.subtitle }</h2>
      </div>
    </section>
  )
}

export default Home

