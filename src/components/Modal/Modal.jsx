import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "redux/modal/modal.reducer";
import { ReactComponent as IconBook} from "assets/icons/phonebook.svg";
import css from './Modal.module.css'

export const Modal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(toggleModal())
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(toggleModal())
    }
  };

  return (
    <div className={css.backdrop} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <button onClick={() => dispatch(toggleModal())} className={css.openBtn}>
          Open phonebook
          <IconBook/>
        </button>
      </div>
    </div>
  );
};

