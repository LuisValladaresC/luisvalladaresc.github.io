import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.css'

const Contact = () => {
  const langData = useSelector(state => state.lang.data)
  const currentSection = useSelector(state => state.menu.currentSection)
  const wallpaperRef = useRef(null);

  useEffect(() => {
    const backgroundImage = wallpaperRef.current.dataset.src
    if (!backgroundImage) return
    else if (currentSection == langData.portfolio.id ||
             currentSection == langData.contact.id) {
      wallpaperRef.current.style.backgroundImage = `url('${backgroundImage}')`
      delete wallpaperRef.current.dataset.src
    }
  }, [currentSection])

  const inputHandler = (e) => {
    const currentInput = e.target;
    if (currentInput.checkValidity()) {
      currentInput.classList.add('contact-input__valid')
      currentInput.classList.remove('contact-input__invalid')
    } else {
      currentInput.classList.remove('contact-input__valid')
      currentInput.classList.add('contact-input__invalid')
    }
  }

  const formHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target)
    const name = form.get('name')
    const subject = form.get('subject')
    const message = form.get('message')
    window.location.href = `mailto:${langData.contact.contact_networks.email}?subject=${name} - ${subject}&body=${message}`;
  }

  return (
    <section id={langData.contact.id} className='relative flex justify-center bg-primary-dark'>
        {/* WALLPAPER */}
        <div 
          ref={wallpaperRef}
          data-src={langData.general.wallpapers.contact}
          className='absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat opacity-30'
        ></div>
        {/* CONTENT */}
        <div className='section-container relative -top-[calc(theme(minHeight.contact)/2)] min-h-contact my-0'>
          {/* CARD */}
          <div className='relative grid sm:grid-cols-2 justify-center content-center min-h-[inherit] gap-y-6 sm:gap-y-8 md:gap-y-10 sm:gap-x-6 md:gap-x-navbar px-4 sm:px-8 md:px-navbar py-navbar lg:p-[calc(theme(spacing.navbar)*2)] bg-primary shadow-md'>
            {/* INFO */}
            <div className="grid content-center gap-y-5 md:gap-y-6 sm:mb-1">
              <h2 className='text-center sm:text-left text-xl/6 sm:text-2xl lg:text-[1.7rem] -tracking-tighter text-white uppercase'>
                {langData.contact.title}
              </h2>
              <p className='contact-paragraph'>
                {langData.contact.description}
              </p>
              {/* CONTACT NETWORKS */}
              <div className='flex justify-between items-center'>
                <a href={`mailto:${langData.contact.contact_networks.email}`} className='contact-paragraph hover:text-tertiary focus:text-tertiary underline underline-offset-2'>
                  {langData.contact.contact_networks.email}
                </a>
                <div className='sm:col-span-2 flex justify-center gap-x-3 sm:gap-x-2 lg:gap-x-3 text-[1.375rem]/none md:text-2xl/none pb-0.5'>
                  <a href={langData.contact.contact_networks.github} target='_blank' rel='noreferrer' className='text-white hover:text-tertiary'>
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                  </a>
                  <a href={langData.contact.contact_networks.linkedin} target='_blank' rel='noreferrer' className='text-white hover:text-tertiary'>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            {/* FORM */}
            <form
              onSubmit={formHandler}
              className='grid content-center gap-y-2'
            >
              <input 
                type='text'
                name='name'
                minLength={langData.contact.form.name.minLength}
                maxLength={langData.contact.form.name.maxLength}
                placeholder={langData.contact.form.name.placeholder}
                onBlur={inputHandler}
                className='p1 contact-input'
                required
              />
              <input
                type='text'
                name='subject'
                minLength={langData.contact.form.subject.minLength}
                maxLength={langData.contact.form.subject.maxLength}
                placeholder={langData.contact.form.subject.placeholder}
                onBlur={inputHandler}
                className='p1 contact-input'
                required
              />
              <textarea
                name='message'
                rows='5'
                minLength={langData.contact.form.message.minLength}
                maxLength={langData.contact.form.message.maxLength}
                placeholder={langData.contact.form.message.placeholder}
                onBlur={inputHandler}
                className='p1 contact-input resize-none'
                required
              >
              </textarea>
              <button type='submit' className='p1 py-2 px-2.5 border-none bg-tertiary hover:bg-primary-light text-white duration-200'>
                {langData.contact.form.submit}
              </button>
            </form>
          </div>
          {/* NAV ARROW */}
          <div className='absolute left-0 right-0 flex justify-center items-center h-[calc(theme(minHeight.contact)/2)]'>
            <a href={`#${langData.home.id}`} className='text-4xl sm:text-[2.5rem] md:text-[2.75rem] lg:text-5xl leading-none text-secondary duration-200 hover:scale-110'>
              <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
            </a>
          </div>
        </div>
    </section>
  )
}

export default Contact