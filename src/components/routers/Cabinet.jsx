import React from 'react'
import '../cabinet/Cabinet.scss'

const Cabinet = () => {
    return (
        <main className='main'>
            <div className='container'>
                <h1 className="page__title page__title--center">Профиль</h1>

                <form className="form" action="" method="post">
                    <div className="cabinet">
                        <div className="cabinet__form">
                            <div className="form__group form__group--md">
                                <input className="form__control" type="text"
                                       placeholder="Ваше имя"/>
                                <span className="form__line"></span>
                            </div>
                            <div className="form__group form__group--md">
                                <input className="form__control" type="email"
                                       placeholder="Ваш e-mail"/>
                                <span className="form__line"></span>
                            </div>
                            <div className="form__group form__group--md">
                                <input className="form__control" type="password"
                                       placeholder="Новый пароль"/>
                                <span className="form__line"></span>
                            </div>
                            <div className="form__group form__group--md">
                                <input className="form__control" type="password"
                                       placeholder="Подтвердите пароль"/>
                                <span className="form__line"></span>
                            </div>
                        </div>

                        <div className="cabinet__avatar">
                            <img className="cabinet__img" src='' alt=""/>
                            <label className="cabinet__file">
                                <input type="file"/>
                                выбрать аватар
                            </label>
                        </div>
                    </div>
                    <div className="form__footer">
                        <button className="btn btn--blue btn--rounded btn--sm"
                                type="button">Сохранить
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Cabinet