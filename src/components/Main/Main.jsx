import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import Job from '../Job/Job';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css'

const Main = () => {
  const langData = useSelector(state => state.lang.data)
  const currentSection = useSelector(state => state.menu.currentSection)
  const wallpaperRef = useRef(null);

  useEffect(() => {
    const backgroundImage = wallpaperRef.current.dataset.src
    if (!backgroundImage) return
    else if (currentSection == langData.professional.id ||
             currentSection == langData.job.id ||
             currentSection == langData.portfolio.id ||
             currentSection == langData.contact.id) {
      wallpaperRef.current.style.backgroundImage = `url('${backgroundImage}')`;
      delete wallpaperRef.current.dataset.src
    }
  }, [currentSection])

  return (
    <main className='relative grid justify-center pb-[calc(theme(minHeight.contact)/2)] bg-primary-dark'>
      <div 
        ref={wallpaperRef}
        data-src={langData.general.wallpapers.main}
        className='absolute inset-0 bg-scroll bg-cover bg-center bg-no-repeat opacity-[0.35]'
      ></div>
      <Job />
      <Portfolio />
    </main>
  )
}

export default Main