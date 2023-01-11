import React, {useState} from 'react'
import './AddPost.scss'
import send from '../../images/send.svg'
import add from '../../images/add.svg'
import postTwo from "../../images/post-2.jpg"
import {useDispatch} from "react-redux"
import {addPostAction} from "../store/postReducer"

const AddPost = () => {
    const dispatch = useDispatch()
    const [inputName, setInputName] = useState('')

    const inputNameHandler = (event) => {
        setInputName(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const newPost = {
            image: postTwo,
            title: 'Изображение',
            description: inputName,
            time: '20.11.2020',
            category: 'Создание сайтов',
            read: 'Читать',
            type: 'image',
            id: Math.random()
        }
        dispatch(addPostAction(newPost))

        setInputName('')
    }

    return (
        <div className='add-post'>
            <form className='add-post__form' action='/' onSubmit={submitHandler}>
                <textarea className='add-post__textarea'
                          name='post-text'
                          placeholder='Напишите что-нибудь'
                          onChange={inputNameHandler}
                          value={inputName}/>
                <div className='add-post__form-actions'>
                    <label className='add-post__file' form="add-post-file">
                        <img src={add} alt='/'/>
                    </label>
                    <button className="add-post__send" type='submit'>
                        <img src={send} alt='/'/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddPost