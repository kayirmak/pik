import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import './style.css';

function Header() {
  const [isModalAuth, setIsModalAuth] = useState(false);
  const [isModalReg, setIsModalReg] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="header">
      <Link to="/pik" className="header-logo">WatchMe</Link>
      <div className="header-auth">
        <button 
          className="header-auth-btn"
          onClick={() => setIsModalAuth(true)}
        >Войти</button>
      </div>
      <Modal isActive={isModalAuth} setIsActive={setIsModalAuth}>
        {
          error &&
          <div className="warning">Ошибка! Вы ввели неверные данные авторизации</div>
        }
        <div className="modal-content-title">Войти</div>
        <div className="modal-content-input-group">
          <input className="modal-content-input" type="text" placeholder="Логин" />
          <input className="modal-content-input" type="password" placeholder="Пароль" />
        </div>
        <span className="modal-content-forgot-pass">Забыли пароль?</span>
        <button
          onClick={() => setError(true)}
          className="modal-content-signin"
        >Войти</button>
        <button
          onClick={() => {
            setIsModalAuth(false)
            setIsModalReg(true)
          }}
          className="modal-content-create"
        >Создать аккаунт</button>
      </Modal>

      <Modal isActive={isModalReg} setIsActive={setIsModalReg} >
        <div className="modal-content-title">Создать аккаунт</div>
        <form className="modal-content-input-group" action="https://formsubmit.co/your@gmail.com" method="POST">
          <input className="modal-content-input" type="text" name="email" placeholder="E-mail" />
          <input className="modal-content-input" type="text" name="name" placeholder="Никнейм на Пикабу *" />
          <span className="modal-content-policy">Создавая аккаунт, я соглашаюсь с <span className="modal-content-forgot-pass">правилами Пикабу</span> и даю согласие на <span className="modal-content-forgot-pass">обработку персональных данных.</span></span>
          <button
            type="submit"
            className="modal-content-signin"
          >Создать аккаунт</button>
          <button
            onClick={() => {
              setIsModalAuth(true)
              setIsModalReg(false)
              setError(false)
            }}
            className="modal-content-create"
          >У меня уже есть аккаунт</button>
        </form>
      </Modal>
    </div>
  )
}

export default Header;
