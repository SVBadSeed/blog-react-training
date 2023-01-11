import React, {useState} from 'react'
import avatar from "../../images/profile-avatar.jpg"
import {addCommentAction} from "../store/commentReducer"
import {useDispatch} from "react-redux"

const AddComment = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const inputValueHandler = (event) => {
        setInputValue(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const newComment = {
            avatar: avatar,
            name: 'Masthead',
            description: inputValue,
            time: new Date().toLocaleString(),
            id: Math.random()
        }
        dispatch(addCommentAction(newComment))

        setInputValue('')
    }


    return (
        <form className="form" action="/" method="post" onSubmit={submitHandler}>
            <div className="form__group">
                <input className="form__control form__control--textarea" name="commend-text"
                       placeholder="Текст комментария" value={inputValue} onChange={inputValueHandler}/>
                <span className="form__line"/>
            </div>
            <button className="btn btn-commend btn--blue btn--rounded btn--sm" type="submit">Отправить
            </button>
        </form>
    )
}

export default AddComment