import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCloseModal } from '../../store/modalSlice'
import Project from './Project/Project'
import './Modal.css'


const Modal = () => {
  const modalRef = useRef(null)
  const modalState = useSelector(state => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    if (modalState.isOpen) setTimeout(() => modalRef.current.classList.add('active'), 0)
    else modalRef.current.classList.remove('active')
  })

  return createPortal(
    <div ref={modalRef} className='group/modal'>
      <div className='fixed inset-0 -z-[1] flex justify-center items-center max-h-screen p-3 sm:p-4 md:p-5 box-border opacity-0 duration-500 transition-[z-index_opacity] group-[.active]/modal:opacity-100 group-[.active]/modal:z-50'>
        <div onClick={() => dispatch(setCloseModal())} className='absolute inset-0 bg-black/50 cursor-pointer'></div>
        <div className='section-container m-0 translate-y-[-6vh] group-[.active]/modal:translate-y-0 duration-500 max-h-full overflow-auto'>
          <Project />
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal