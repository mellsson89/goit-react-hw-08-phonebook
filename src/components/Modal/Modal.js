import React, {useCallback, useEffect} from "react";
import {createPortal} from 'react-dom';
import style from './styles/modal.module.scss';



export default function Modal({onClose,children})  {

    const modalRoot=document.querySelector('#modal-root');

    const closeModalEscape = useCallback((e) => {

        if (e.code === "Escape") {
            onClose();
        }
    },[onClose])

    useEffect(() => {
        window.addEventListener('keydown',closeModalEscape)
        return () => {
            window.removeEventListener('keydown', closeModalEscape)
        }
    },[closeModalEscape])


//
   const  closeClickModal=(e) => {
        if(e.target === e.currentTarget) {
            onClose();
        }
    }

        return createPortal(<div className={style.Modal__backdrop} onClick={closeClickModal}>
            <div className={style.Modal__content}>{children}</div>
        </div>,modalRoot)

}
