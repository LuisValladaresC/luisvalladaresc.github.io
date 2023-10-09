import { useSelector } from 'react-redux'
import { Fragment, useEffect } from 'react'
import './Professional.css'

const Professional = () => {
  const langData = useSelector(state => state.lang.data)

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      })
    }, {
      threshold: 0.5
    })

    const skillLevels = document.querySelectorAll('.profesional-conocimiento-nivel');
    Array.from(skillLevels).forEach(element => observer.observe(element));
  }, [])

  return (
    <section id={langData.professional.id} className='profesional'>
      <div className='section-background-color'>
        <div className='profesional-contenido'>
          <h2 className='profesional-titulo'>
            <span>01</span> { langData.professional.title }
          </h2>
          <h3 className='profesional-subtitulo'>{ langData.professional.subtitle }</h3>

          <div className='profesional-conocimientos'>
            { langData.professional.knowledge.map((knowledge, index) => 
              <Fragment key={index}>
                <p className='profesional-conocimiento-nombre'>{ knowledge.title }</p>
                <div className='profesional-conocimiento-nivel'>
                  <div className={`profesional-nivel-barra n${ knowledge.level }`}>
                    <div className='profesional-barra-relleno'></div>
                  </div>
                  <p className='profesional-nivel-porcentaje'>{ knowledge.level }%</p>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Professional