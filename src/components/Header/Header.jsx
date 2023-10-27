import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCloseMenu, setOpenMenu, setCurrentSection } from '../../store/menuSlice'
import './Header.css'

const Header = () => {
  const dispatch = useDispatch()
  const langData = useSelector(state => state.lang.data)
  const isOpenMenu = useSelector(state => state.menu.isOpen)
  const currentSection = useSelector(state => state.menu.currentSection)

  useEffect(() => {
    // Establece como seccion actual, la seccion con mayor area visible en pantalla
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.intersectionRect.height > window.innerHeight / 2) {
            dispatch(setCurrentSection(entry.target.id))
          }
        }
      });
    }, {
      threshold: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]
    })

    const sections = document.querySelectorAll(`
      #${langData.home.id},
      #${langData.professional.id},
      #${langData.job.id},
      #${langData.portfolio.id},
      #${langData.contact.id}
    `);
    Array.from(sections).forEach(element => observer.observe(element));
  }, [])

  return (
    <header className='absolute w-full'>
      <nav id='navbar' className={`fixed left-0 right-0 z-10 hidden md:flex justify-center w-full h-navbar shadow-xl shadow-black/5 duration-500 ${currentSection && currentSection != langData.home.id ? 'bg-primary-light' : ''}`}>
        { langData.header.navbar.map((navItem, index) => 
          <a
            key={index}
            href={navItem.href}
            className={`flex items-center h-[inherit] px-6 lg:px-7 md:text-[0.7rem] uppercase duration-150 ${navItem.href == `#${currentSection}` ? 'text-tertiary border-tertiary' : 'border-secondary-dark hover:border-secondary text-secondary-dark hover:text-secondary'}`}
          >
            {navItem.border
              ?
              <span className={`p-2 border rounded border-current`}>
                {navItem.text}
              </span>
              :
              navItem.text 
            }
          </a>
        )}
      </nav>

      <div className={`group/menu ${isOpenMenu ? 'active' : ''}`}>
        <nav className='fixed top-0 bottom-0 left-0 right-0 -z-[1] grid justify-center content-center bg-primary opacity-0 duration-500 group-[.active]/menu:z-10 group-[.active]/menu:opacity-100'>
          { langData.header.navbar.map((navItem, index) => 
            <a
              key={index}
              href={navItem.href}
              onClick={() => dispatch(setCloseMenu())}
              className={`py-3 text-center text-xs sm:text-sm tracking-[0.2em] uppercase ${navItem.href == `#${currentSection}` ? 'text-tertiary' : 'text-white hover:text-tertiary'}`}
            >
              {navItem.text}
            </a>
          )}
        </nav>

        <button
          onClick={() => isOpenMenu ? dispatch(setCloseMenu()) : dispatch(setOpenMenu())}
          className='fixed z-10 grid md:hidden w-6 h-5 mx-4 my-5'
        >
          <span className='menu-button-line menu-button-line__top '></span>
          <span className='menu-button-line menu-button-line__center'></span>
          <span className='menu-button-line menu-button-line__bottom'></span>
        </button>
      </div>
    </header>
  )
}

export default Header

