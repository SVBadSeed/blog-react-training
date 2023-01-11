import React from 'react'
import './WriteMeModal.scss'
import '../form/Form.scss'

const WriteMeModal = ({active, setActive}) => {

    return (
        <div className={active ? 'modal show' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__content modal__content--contact' onClick={e => e.stopPropagation()}>
                <button className='modal__close' type='button'>
                    <img src='' alt=''/>
                </button>
                <form className='form' action='/' method='post'>
                    <div className='form__group form__group--md'>
                        <input className='form__control' type='text'
                               placeholder='Ваше имя'/>
                        <span className='form__line'></span>
                    </div>
                    <div className='form__group form__group--md'>
                        <input className='form__control' type='email'
                               placeholder='Ваш e-mail'/>
                        <span className='form__line'></span>
                    </div>
                    <div className='form__group form__group--md'>
                        <input className='form__control' type='text'
                               placeholder='Текст сообщения'/>
                        <span className='form__line'></span>
                    </div>
                    <div className='form__footer'>
                        <div className='form__group form__group--md'>
                            <button className='btn btn--blue btn--rounded btn--sm'
                                    type='button'>Отправить
                            </button>
                        </div>
                    </div>
                </form>
                <ul className='modal__footer'>
                    <li>
                        e-mail: <a href='mailto:info@mywebsite.ru'>info@mywebsite.ru</a>
                    </li>
                    <li>
                        тел: <a href='tel:+94323285622'>+943-232-856-22</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WriteMeModal