import { useSelector } from 'react-redux'
import './Home.css'

const Home = () => {
  const langData = useSelector(state => state.lang.data)

  return (
    <section id={langData.home.id} className='home'>
      <div className='section-background-color'>
        <div className='hero'>
          <h1 className='hero-titulo'>
            { langData.home.title.line1 }
            <br />
            { langData.home.title.line2 }
            <br />
            { langData.home.title.line3 }<span>.</span>
          </h1>
          <h2 className='hero-subtitulo'>{ langData.home.subtitle }</h2>
          <a className='hero-arrow-link' href='#profesional'><i className='fas fa-chevron-down'></i></a>
        </div>
      </div>
    </section>
  )
}

export default Home

