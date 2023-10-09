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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Establece como seccion actual, la seccion con mayor area visible en pantalla
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
    <header className='header'>
      <nav className='header-navbar'>
        { langData.navbar.items.map((navItem, index) => 
          <a
            key={index}
            href={navItem.href}
            className={`header-navbar-link ${navItem.href == `#${currentSection}` ? 'active' : ''}`}
          >
            {navItem.border
              ? <span>{navItem.text}</span>
              : navItem.text 
            }
          </a>
        )}
      </nav>

      <div
        onClick={() => isOpenMenu ? dispatch(setCloseMenu()) : dispatch(setOpenMenu())}
        className={`header-menu-button ${isOpenMenu ? 'active' : ''}`}
      >
        <span className='header-button-line button-line-1'></span>
        <span className='header-button-line button-line-2'></span>
        <span className='header-button-line button-line-3'></span>
      </div>

      <nav className={`header-menu ${isOpenMenu ? 'active' : ''}`}>
        { langData.navbar.items.map((navItem, index) => 
          <a
            key={index}
            href={navItem.href}
            onClick={() => dispatch(setCloseMenu())}
            className={`header-menu-link ${navItem.href == currentSection ? 'active' : ''}`}
          >
            {navItem.text}
          </a>
        )}
      </nav>
    </header>
  )
}

export default Header

