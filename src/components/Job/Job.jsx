import { useSelector } from 'react-redux'
import './Job.css'

const Job = () => {
  const langData = useSelector(state => state.lang.data)

  return (
    <section id={langData.job.id} className='trabajo'>
      <div className='trabajo-encabezado'>
        <h2 className='encabezado-titulo'><span>02</span> { langData.job.title }</h2>
        <h3 className='encabezado-subtitulo'>{ langData.job.subtitle }</h3>
      </div>

      <div className='trabajo-servicios'>
        { langData.job.services.map((service, index) => {
          if (index % 2 == 0) {
            return (
              <div className='trabajo-servicio' key={index}>
                <figure className='trabajo-contenedor-imagen'>
                  <img
                    className='trabajo-imagen'
                    src={service.image.url2x || service.image.url}
                    srcSet={service.image.url2x && `${service.image.url}, ${service.image.url2x} 2x`}
                    alt={ service.title }
                  />
                  <div className='trabajo-imagen-capa'>
                    <p className='trabajo-etiqueta'>{ service.start_date } - { new Date().getFullYear() }</p>
                    {(service.tools.includes('html')) && <i className='trabajo-icono fab fa-html5'></i> }
                    {(service.tools.includes('css')) && <i className='trabajo-icono fab fa-css3-alt'></i> }
                    {(service.tools.includes('javascript')) && <i className='trabajo-icono fab fa-js-square'></i> }
                    {(service.tools.includes('nodejs')) && <i className='trabajo-icono fab fa-node'></i> }
                    {(service.tools.includes('php')) && <i className='trabajo-icono fab fa-php'></i> }
                    {(service.tools.includes('mysql')) && <i className='trabajo-icono fab fa-mysql'></i> }
                    {(service.tools.includes('git')) && <i className='trabajo-icono fab fa-git-square'></i> }
                    {(service.tools.includes('github')) && <i className='trabajo-icono fab fa-github'></i> }
                    {(service.tools.includes('gitlab')) && <i className='trabajo-icono fab fa-gitlab'></i> }
                  </div>
                </figure>
                <div className='trabajo-descripcion'>
                  <h3 className='trabajo-descripcion-titulo'>{ service.title }</h3>
                  <p className='trabajo-descripcion-parrafo'>{ service.description }</p>
                </div>
              </div>
            )
          } else {
            return (
              <div className='trabajo-servicio impar' key={index}>
                <div className='trabajo-descripcion'>
                  <h3 className='trabajo-descripcion-titulo'>{ service.title }</h3>
                  <p className='trabajo-descripcion-parrafo'>{ service.description }</p>
                </div>
                <figure className='trabajo-contenedor-imagen'>
                  <div className='trabajo-imagen-capa'>
                    {(service.tools.includes('html')) && <i className='trabajo-icono fab fa-html5'></i> }
                    {(service.tools.includes('css')) && <i className='trabajo-icono fab fa-css3-alt'></i> }
                    {(service.tools.includes('javascript')) && <i className='trabajo-icono fab fa-js-square'></i> }
                    {(service.tools.includes('nodejs')) && <i className='trabajo-icono fab fa-node'></i> }
                    {(service.tools.includes('php')) && <i className='trabajo-icono fab fa-php'></i> }
                    {(service.tools.includes('mysql')) && <i className='trabajo-icono fab fa-mysql'></i> }
                    {(service.tools.includes('git')) && <i className='trabajo-icono fab fa-git-square'></i> }
                    {(service.tools.includes('github')) && <i className='trabajo-icono fab fa-github'></i> }
                    {(service.tools.includes('gitlab')) && <i className='trabajo-icono fab fa-gitlab'></i> }
                    <p className='trabajo-etiqueta'>{ service.start_date } - { new Date().getFullYear() }</p>
                  </div>
                  <img
                    className='trabajo-imagen'
                    src={service.image.url2x || service.image.url}
                    srcSet={service.image.url2x && `${service.image.url}, ${service.image.url2x} 2x`}
                    alt={ service.title }
                  />
                </figure>
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

export default Job

