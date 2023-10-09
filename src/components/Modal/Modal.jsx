import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCloseModal } from '../../store/modalSlice'
import Project from './Project/Project'
import './Modal.css'


const Modal = () => {
  const modalElement = document.getElementById('modal')
  const modalState = useSelector(state => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    if (modalState.isOpen) setTimeout(() => modalElement.classList.add('active'), 0)
    else modalElement.classList.remove('active')
  })

  return createPortal(
    <>
      <div onClick={() => dispatch(setCloseModal())} className='modal-overlay'></div>
      <div className='modal-container'>
        <Project />
      </div>
    </>,
    modalElement
  )
}

export default Modal