import { useDispatch, useSelector } from 'react-redux'
import { setCloseModal } from '../../../store/modalSlice'
import './Project.css'

const Project = () => {
  const dispatch = useDispatch()
  const project = useSelector(state => state.modal.data)

  return (
    <>
      <div className='modal-container-header'>
        <h3 className='modal-encabezado-titulo'>{project.title}</h3>
        <button onClick={() => dispatch(setCloseModal())} className='modal-encabezado-button'>
          <i className="fas fa-times fa-lg"></i>
        </button>
      </div>
      <div className='modal-container-body'>
        <figure className='modal-body-imagen'>
          <img
            src={project.image.description.url2x || project.image.description.url}
            srcSet={project.image.description.url2x && `${project.image.description.url}, ${project.image.description.url2x} 2x`}
            alt={project.title}
          />
        </figure>
        <div className='modal-body-contenido'>
          <h4 className='modal-contenido-titulo'>Descripcion</h4>
          <p className='modal-contenido-parrafo'>{project.description}</p>
          <h4 className='modal-contenido-titulo'>URL</h4>
          <div className='modal-contenido-enlaces'>
            <a className='modal-enlaces-url' href={project.website} target='_blank' rel='noreferrer'>{project.website}</a>
            { project.github &&
              <a className='modal-enlaces-github' href={project.github} target='_blank' rel='noreferrer'>
                <i className='fab fa-github'></i>
              </a>
            }
          </div>
          <h4 className='modal-contenido-titulo'>Requerimientos</h4>
          <div className='modal-contenido-requerimientos'>
            { project.tools.map((tool, index) =>
              <span className={tool} key={index}>{tool}</span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project