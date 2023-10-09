import { useSelector } from 'react-redux'
import './Footer.css'

const Footer = () => {
  const langData = useSelector(state => state.lang.data)

  return (
    <footer id="footer">
      <p className="footer-copyright">{ langData.footer.text }</p>
    </footer>
  )
}

export default Footer