import React, {useState} from 'react'
import './AddPost.scss'
import send from '../../images/send.svg'
import add from '../../images/add.svg'

const AddPost = () => {
    const [inputName, setInputName] = useState('')

    const inputNameHandler = (event) => {
        setInputName(event.target.value)

    }

    const submitHandler = (event) => {
        event.preventDefault()

        const costData = {
            description: inputName
        }

        console.log(costData)
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