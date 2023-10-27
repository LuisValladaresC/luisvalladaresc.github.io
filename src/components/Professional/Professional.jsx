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

    const skillLevels = document.querySelectorAll('.knowledge-level');
    Array.from(skillLevels).forEach(element => observer.observe(element));
  }, [])

  return (
    <section id={langData.professional.id} className='relative flex justify-center items-center min-h-[calc(100vh-(theme(spacing.navbar)/1.5))] bg-primary-dark'>
      <div className='section-overlay section-overlay__professional'></div>
      <div className='section-container relative w-full'>
        <h2 className='h2'>
          <span className='text-secondary'>01</span> { langData.professional.title }
        </h2>
        <h3 className='h3 mb-6'>
          { langData.professional.subtitle }
        </h3>

        <div className='grid grid-cols-[auto_1fr] gap-y-3 md:gap-y-4 lg:gap-y-5 w-full text-[0.7rem] md:text-xs lg:text-sm text-secondary'>
          { langData.professional.knowledge.map((knowledge, index) => 
            <Fragment key={index}>
              <p className='text-right uppercase'>{ knowledge.title }</p>
              <div className='knowledge-level group flex items-center'>
                <div className={`lvl${ knowledge.level } h-2 md:h-2.5 lg:h-3 box-border px-2`}>
                  <div className='w-0 h-full bg-tertiary duration-1000 group-[.active]:w-full'></div>
                </div>
                <p className='uppercase opacity-0 duration-300 delay-[900ms] group-[.active]:opacity-100'>{ knowledge.level }%</p>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  )
}

export default Professional