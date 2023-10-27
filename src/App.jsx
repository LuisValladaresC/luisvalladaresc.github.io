import { useSelector } from 'react-redux'
import {RemoveScroll} from 'react-remove-scroll'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Professional from './components/Professional/Professional'
import Job from './components/Job/Job'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import './App.css'

const App = () => {
  const menu = useSelector(state => state.menu)
  const modal = useSelector(state => state.modal)

  return (
    <RemoveScroll enabled={(menu.isOpen || modal.isOpen)} removeScrollBar={false}>
      <Header />

      <Home />
      <Professional />
      <main className='relative grid justify-center pb-[calc(theme(minHeight.contact)/2)] bg-primary-dark'>
        <div className='section-overlay section-overlay__main'></div>
        <Job />
        <Portfolio />
      </main>
      <Contact />

      <Footer />
      {!!modal.data && <Modal />}
    </RemoveScroll>
  )
}

export default App