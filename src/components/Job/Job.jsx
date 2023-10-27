import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Job.css'

const Job = () => {
  const langData = useSelector(state => state.lang.data)

  return (
    <section id={langData.job.id} className='section-container mb-0'>
      <h2 className='h2'>
        <span className='text-secondary'>02</span> { langData.job.title }
      </h2>
      <h3 className='h3 mb-6 lg:mb-8'>
        { langData.job.subtitle }
      </h3>

      <div className='grid gap-y-6 lg:gap-y-8'>
        { langData.job.services.map((service, index) => 
          <div key={index} className={`group relative sm:grid grid-cols-6 items-center mb-5 sm:mb-0`}>
            {/* IMAGE */}
            <figure className='relative row-start-1 col-start-1 group-even:col-start-3 col-span-4 shadow-md bg-primary-dark'>
              <img
                src={service.image.url2x || service.image.url}
                srcSet={service.image.url2x && `${service.image.url}, ${service.image.url2x} 2x`}
                alt={ service.title }
                className='w-full h-full object-cover align-top opacity-70'
              />
              <div className='absolute top-0 bottom-0 left-0 right-0 flex sm:flex-col justify-between items-start sm:group-even:items-end m-1.5 sm:m-2 lg:m-3'>
                <p className='inline-block h-fit w-fit p-1.5 text-[0.7rem] sm:text-xs md:text-sm border rounded border-white text-white opacity-90'>
                  { service.start_date } - { new Date().getFullYear() }
                </p>
                <div className='flex justify-end gap-x-3'>
                  { service.tools.map((tool, index) => {
                    let iconElement;
                    switch (tool) {
                      case 'html': iconElement = <FontAwesomeIcon icon="fa-brands fa-html5" />; break;
                      case 'css': iconElement = <FontAwesomeIcon icon="fa-brands fa-css3-alt" />; break;
                      case 'javascript': iconElement = <FontAwesomeIcon icon="fa-brands fa-square-js" />; break;
                      case 'nodejs': iconElement = <FontAwesomeIcon icon="fa-brands fa-node" />; break;
                      case 'php': iconElement = <FontAwesomeIcon icon="fa-brands fa-php" />; break;
                      case 'mysql': iconElement = <FontAwesomeIcon icon="fa-solid fa-database" />; break;
                      case 'git': iconElement = <FontAwesomeIcon icon="fa-brands fa-square-git" />; break;
                      case 'github': iconElement = <FontAwesomeIcon icon="fa-brands fa-github" />; break;
                      case 'gitlab': iconElement = <FontAwesomeIcon icon="fa-brands fa-square-gitlab" />; break;
                    }
                    if (iconElement) {
                      return (
                        <span key={index} className='text-2xl sm:text-[1.7rem] md:text-3xl text-white opacity-90'>
                          {iconElement}
                        </span>
                      )
                    }
                  })}
                </div>
              </div>
            </figure>
            {/* CARD */}
            <div className='absolute sm:relative -bottom-5 sm:bottom-auto left-0 right-0 row-start-1 col-start-4 group-even:col-start-1 col-span-3 flex flex-col justify-center w-[90%] sm:w-full sm:min-h-[80%] md:min-h-[75%] p-3 sm:p-4 md:p-5 lg:p-6 mx-auto rounded shadow-md bg-white/90'>
              <h3 className='h3 mt-0 font-bold sm:font-semibold text-black'>{ service.title }</h3>
              <p className='p1 text-justify'>{ service.description }</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Job

