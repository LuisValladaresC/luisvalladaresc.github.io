import { useDispatch, useSelector } from 'react-redux'
import { setOpenModal } from '../../store/modalSlice'
import './Portfolio.css'

const Portfolio = () => {
  const dispatch = useDispatch()
  const langData = useSelector(state => state.lang.data)

  return (
    <section id={langData.portfolio.id} className='section-container'>
      <h2 className='h2'>
        <span className='text-secondary'>03</span> {langData.portfolio.title}
      </h2>
      <h3 className='h3 mb-6 lg:mb-8'>
        {langData.portfolio.subtitle}
      </h3>
      <div className='grid sm:grid-cols-2 gap-2 sm:gap-1.5'>
        { langData.portfolio.projects.map((project, index) => 
          <div
            key={index}
            onClick={() => dispatch(setOpenModal(project))}
            className='group/project relative shadow-md cursor-pointer overflow-hidden'
          >
            <img className='w-full h-full align-top object-cover group-hover/project:brightness-[0.40] group-hover/project:contrast-[0.90] duration-500'
              src={project.image.card.url2x || project.image.card.url}
              srcSet={project.image.card.url2x && `${project.image.card.url}, ${project.image.card.url2x} 2x`}
              alt={project.title}
            />
            <div className='absolute inset-0 grid justify-center content-center gap-2 m-3 opacity-0 group-hover/project:opacity-100 duration-500'>
              <h4 className='text-center text-sm lg:text-base font-medium tracking-widest text-white uppercase group-hover/project:animate-pulse'>{project.title}</h4>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio