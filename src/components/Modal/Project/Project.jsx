import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setCloseModal } from '../../../store/modalSlice'
import './Project.css'

const Project = () => {
  const dispatch = useDispatch()
  const project = useSelector(state => state.modal.data)
  const langData = useSelector(state => state.lang.data)

  return (
    <div className='grid gap-y-3 sm:gap-y-4 md:gap-y-4 px-3 sm:px-4 md:px-5 py-4 md:py-5 rounded-md shadow-md bg-white'>
      {/* Header */}
      <div className='relative'>
        <h3 className='text-center font-semibold text-sm/none sm:text-base/none md:text-lg/none tracking-[0.15em] lg:tracking-[0.2em] uppercase'>{project.title}</h3>
        {/* <button onClick={() => dispatch(setCloseModal())} className='absolute top-0 bottom-0 right-0 text-xs/none sm:text-sm/none md:text-base/none text-tertiary hover:text-tertiary/60'>
          <FontAwesomeIcon icon="fa-solid fa-x" />
        </button> */}
      </div>
      {/* Image */}
      <div className={`relative grid grid-cols-10 items-end gap-2 sm:gap-4 md:gap-5 w-full px-3 sm:px-4 md:px-5 py-4 sm:py-6 md:py-8`} style={{backgroundColor: project.image.background_color}}>
        { !project.image.mobile
        ?
          <>
            <img
              src={project.image.desktop[1].url1x}
              srcSet={project.image.desktop[1].url2x && `${project.image.desktop[1].url1x}, ${project.image.desktop[1].url2x} 2x`}
              alt={project.title}
              loading='lazy'
              className='row-start-1 col-start-1 mb-[7%] col-span-8 w-full h-auto shadow-lg'
            />
            <img
              src={project.image.desktop[0].url1x}
              srcSet={project.image.desktop[0].url2x && `${project.image.desktop[0].url1x}, ${project.image.desktop[0].url2x} 2x`}
              alt={project.title}
              loading='lazy'
              className='row-start-1 col-start-3 self-end col-span-8 w-full h-auto shadow-lg'
            />
          </>
        :
          <>
            <img
              src={project.image.desktop.url1x}
              srcSet={project.image.desktop.url2x && `${project.image.desktop.url1x}, ${project.image.desktop.url2x} 2x`}
              alt={`${project.title} (Desktop)`}
              loading='lazy'
              className='col-span-8 w-full h-auto shadow-lg'
            />
            <img
              src={project.image.mobile.url1x}
              srcSet={project.image.mobile.url2x && `${project.image.mobile.url1x}, ${project.image.mobile.url2x} 2x`}
              alt={`${project.title} (Mobile)`}
              loading='lazy'
              className='col-span-2 w-full h-auto shadow-lg'
            />
          </>
        }
        <a 
          href={project.website}
          target='_blank'
          rel='noreferrer'
          className='absolute right-0 top-0 bg-tertiary text-[0.6rem] sm:text-[0.7rem] tracking-widest uppercase text-white font-semibold px-3 md:px-5 py-2 duration-150 origin-top-right hover:scale-[1.04] shadow'
        >
          Ver Proyecto
        </a>
      </div>
      {/* Description */}
      <div>
        <h4 className='project-subtitles'>{langData.portfolio.modal.description}</h4>
        <p className='p1 text-justify'>{project.description}</p>
      </div>
      {/* Url */}
      {/* <div>
        <h4 className='project-subtitles mb-0'>{langData.portfolio.modal.url}</h4>
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
      </div> */}
      {/* Experience */}
      <div>
        <h4 className='project-subtitles'>{langData.portfolio.modal.experience}</h4>
        <div className='flex flex-wrap'>
          { project.tools.map((tool, index) =>
            <p 
              key={index} 
              className={`bg-technology-${tool} p1 px-2 sm:px-4 md:px-6 p-px text-center text-white uppercase`}
              // bg-technology-html bg-technology-css bg-technology-javascript bg-technology-nunjucks bg-technology-handlebars bg-technology-bootstrap bg-technology-tailwindcss bg-technology-react bg-technology-vue bg-technology-nodejs bg-technology-php bg-technology-laravel bg-technology-ruby bg-technology-rails bg-technology-mysql bg-technology-postgresql bg-technology-firebase bg-technology-webpack bg-technology-gulp bg-technology-vite bg-technology-git bg-technology-github bg-technology-gitlab
            >
              {tool}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project