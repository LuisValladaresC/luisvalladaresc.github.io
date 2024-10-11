import { useEffect } from 'react'
import { useSelector } from 'react-redux'
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

  const knowledgeListElement = (items, classColorDecoration) => (
    <ul className='grid gap-y-3'>
      { items.map((knowledge, index) => 
        <li key={index}>
          <h4 className='flex gap-x-1 mb-0.5 text-[0.7rem] md:text-xs lg:text-sm font-medium tracking-wide text-secondary uppercase'>
            { knowledge.title }
          </h4>
          <div className={`knowledge-level group w-full h-2 md:h-2.5 lg:h-3`}>
            <div className={`w-0 group-[.active]:w-full h-full ${classColorDecoration} duration-1000`}></div>
          </div>
          <div className='h-full overflow-hidden'>
            <div className='w-full px-1 md:px-2 py-0.5 md:py-1 bg-primary-dark/50'>
              <p className='text-justify text-2xs md:text-[0.7rem] lg:text-xs tracking-wide text-secondary/80'>
                { knowledge.description }
              </p>
            </div>
          </div>
        </li>
      )}
    </ul>
  )

  return (
    <section id={langData.professional.id} className='relative flex justify-center items-center min-h-[calc(100vh-theme(spacing.navbar))] pt-[calc(theme(minHeight.aboutme)/2)] bg-primary-dark'>
      {/* WALLPAPER */}
      <div className='absolute inset-0 opacity-[0.45] bg-fixed bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url('${langData.general.wallpapers.professional}')`}}></div>
      {/* CONTENT */}
      <div className='section-container relative w-full pb-3'>
        <h2 className='h2'>
          <span className='text-secondary'>01</span> { langData.professional.title }
        </h2>
        <h3 className='h3 mb-2'>
          { langData.professional.subtitle }
        </h3>
        { knowledgeListElement(langData.professional.knowledge, 'bg-tertiary') }
        <h3 className='h3 mt-6 lg:mt-7'>
          { langData.professional.subtitle_2 }
        </h3>
        { knowledgeListElement(langData.professional.experience, 'bg-secondary') }
      </div>
    </section>
  )
}

export default Professional