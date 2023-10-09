import { useDispatch, useSelector } from 'react-redux'
import { setOpenModal } from '../../store/modalSlice'
import './Portfolio.css'

const Portfolio = () => {
  const dispatch = useDispatch()
  const langData = useSelector(state => state.lang.data)

  return (
    <section id={langData.portfolio.id} className='portafolio'>
      <h2 className='portafolio-titulo'><span>03</span> {langData.portfolio.title}</h2>
      <h3 className='portafolio-subtitulo'>{langData.portfolio.subtitle}</h3>
      <div className='portafolio-proyectos'>
        { langData.portfolio.projects.map((project, index) => 
          <div
            key={index}
            onClick={() => dispatch(setOpenModal(project))}
            className='portafolio-proyecto'
          >
            <picture>
              <img className='portafolio-imagen'
                src={project.image.card.url2x || project.image.card.url}
                srcSet={project.image.card.url2x && `${project.image.card.url}, ${project.image.card.url2x} 2x`}
                alt={project.title}
              />
            </picture>
            <div className='portafolio-descripcion'>
              <h4 className='portafolio-descripcion-titulo'>{project.title}</h4>
              <p className='portafolio-descripcion-parrafo'>{project.resume}</p>
              <i className='portafolio-icono fas fa-search-plus'></i>
            </div>
          </div>
        )}
      </div>
      <div className='portafolio-espaciado-de-contacto'></div>
    </section>
  )
}

export default Portfolio