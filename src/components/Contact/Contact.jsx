import { useSelector } from 'react-redux'
import './Contact.css'

const Contact = () => {
  const langData = useSelector(state => state.lang.data)

  return (
    <section id={langData.contact.id} className='contacto'>
      <div className='section-background-color'>
        <div className='contacto-contenedor'>
          <div className='contacto-contenido'>
            <div className='contacto-contenido-informacion'>
              <h2 className='contacto-informacion-titulo'>{langData.contact.title}</h2>
              <p className='contacto-informacion-descripcion'>{langData.contact.about_me}</p>
              <a className='contacto-informacion-correo' href='mailto:{contacto.email}'>{langData.contact.email}</a>
              <div className='contacto-informacion-redes-sociales'>
                {langData.contact.social_networks.github && 
                  <a href={langData.contact.social_networks.github} className='contacto-icono' target='_blank' rel='noreferrer'>
                    <i className='fab fa-github'></i>
                  </a>
                }
                {langData.contact.social_networks.linkedin &&
                  <a href={langData.contact.social_networks.linkedin} className='contacto-icono' target='_blank' rel='noreferrer'>
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                }
                {langData.contact.social_networks.workana &&
                  <a href={langData.contact.social_networks.workana} className='contacto-icono' target='_blank' rel='noreferrer'>
                    <i className='fas fa-globe-americas'></i>
                  </a>
                }
              </div>
            </div>
            {/* <form action=' className='contacto-formulario'>
              <input type='text' name='name' id='name' placeholder='Nombre' required />
              <input type='email' name='email' id='email' placeholder='Correo' required />
              <textarea name='message' id='message' rows='5' placeholder='Mensaje' required></textarea>
              <input type='submit' value='Enviar' id='contacto_enviar' />
            </form> */}
          </div>
          <div className='contacto-arrow-container'>
            <a className='contacto-arrow-link' href={`#${langData.home.id}`}><i className='fas fa-chevron-up'></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact