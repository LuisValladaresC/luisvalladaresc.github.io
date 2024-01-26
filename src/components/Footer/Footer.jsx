import { useSelector } from 'react-redux'
import './Footer.css'

const Footer = () => {
  const langData = useSelector(state => state.lang.data)

  return (
    <footer className='h-navbar flex justify-center items-center bg-primary'>
      <p className="p1 text-white">{ langData.footer.text }</p>
    </footer>
  )
}

export default Footer