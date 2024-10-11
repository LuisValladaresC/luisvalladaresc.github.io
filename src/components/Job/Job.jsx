import { useSelector } from 'react-redux'
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
          <div key={index} className={`group relative sm:grid grid-cols-7 items-center mb-5 sm:mb-0`}>
            {/* IMAGE */}
            <figure className='row-start-1 col-start-1 group-even:col-start-3 col-span-5 relative w-full shadow-md bg-primary'>
              <img
                src={service.image.url}
                srcSet={service.image.url2x && `${service.image.url}, ${service.image.url2x} 2x`}
                loading='lazy'
                className='relative inset-0 w-full h-full object-cover align-top opacity-60'
              />
            </figure>
            {/* CARD */}
            <div className='absolute sm:relative -bottom-5 sm:bottom-auto left-0 right-0 row-start-1 col-start-4 group-even:col-start-1 col-span-4 flex flex-col justify-center w-[90%] sm:w-full sm:min-h-[80%] md:min-h-[75%] p-3 sm:p-4 md:p-5 lg:p-6 mx-auto rounded shadow-md bg-white/90'>
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