import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setCloseModal } from '../../../store/modalSlice'
import './Project.css'

const Project = () => {
  const dispatch = useDispatch()
  const project = useSelector(state => state.modal.data)
  const langData = useSelector(state => state.lang.data)

  return (
    <div className='grid gap-y-3 sm:gap-y-4 md:gap-y-5 px-3 py-4 sm:p-4 md:p-5 rounded-md shadow-md bg-white'>
      <div className='relative'>
        <h3 className='text-center font-semibold text-sm/none sm:text-base/none md:text-lg/none tracking-[0.15em] lg:tracking-[0.2em] uppercase'>{project.title}</h3>
        <button onClick={() => dispatch(setCloseModal())} className='absolute top-0 bottom-0 right-0 text-xs/none sm:text-sm/none md:text-base/none text-tertiary hover:text-tertiary/60'>
          <FontAwesomeIcon icon="fa-solid fa-x" />
        </button>
      </div>
      <img
        src={project.image.description.url2x || project.image.description.url}
        srcSet={project.image.description.url2x && `${project.image.description.url}, ${project.image.description.url2x} 2x`}
        alt={project.title}
        className='justify-self-center w-full sm:max-w-xl md:max-w-[44rem] lg:max-w-none h-auto object-cover'
      />
      <div>
        <h4 className='project-subtitles'>{langData.modal.project.description}</h4>
        <p className='p1 text-justify'>{project.description}</p>
      </div>
      <div>
        <h4 className='project-subtitles mb-0'>{langData.modal.project.url}</h4>
        <div className='flex justify-between'>
          <a className='p1 text-blue-500 hover:text-blue-700 underline' href={project.website} target='_blank' rel='noreferrer'>{project.website}</a>
          { project.github &&
            <a
              href={project.github}
              target='_blank'
              rel='noreferrer'
              className='text-base/none sm:text-lg/none md:text-xl/none lg:text-2xl/none text-blue-500 hover:text-blue-700'
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          }
        </div>
      </div>
      <div>
        <h4 className='project-subtitles'>{langData.modal.project.requirements}</h4>
        <div className='flex flex-wrap'>
          { project.tools.map((tool, index) =>
            <span key={index} className={`bg-technology-${tool} p1 px-2 sm:px-4 md:px-6 p-px text-center text-white uppercase`}>{tool}</span>
            // bg-technology-html bg-technology-css bg-technology-javascript bg-technology-bootstrap bg-technology-nunjucks bg-technology-nodejs bg-technology-php bg-technology-mysql bg-technology-firebase bg-technology-gulp bg-technology-git bg-technology-github bg-technology-gitlab,
          )}
        </div>
      </div>
    </div>
  )
}

export default Project