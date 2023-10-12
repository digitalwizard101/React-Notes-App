import React, { useCallback, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { nanoid } from 'nanoid'
import { Alert } from 'bootstrap'

const AddNote = () => {
    const [text, setText] = useState("")
    const { dispatch, date } = useContext(AppContext)
    const [empty, setIsEmpty] = useState(false)



    const remain = 200 - text.length



    const handleAddNote = () => {



        if (text.length > 0) {

            dispatch({
                type: "ADD_NOTE",

                payload: {
                    id: nanoid(),
                    text: text,
                    date: date
                }

            })
        } else {
            setIsEmpty(true)
            setTimeout(() => {
                setIsEmpty(false)
            }, 1000);

        }

        setText("")
    }



    return (
        <div className='note new  p-2 m-2'>
            <textarea value={text} required="required" onChange={(event) => setText(event.target.value)} name="textArea" id="" cols="25" rows="8" maxLength={200} placeholder='Enter text here...'></textarea>

            {
                empty ? (

                    <div className='alert alert-danger'>
                        Note cannot be empty <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                        </svg>

                    </div>
                ) : null
            }

            <div className='note-footer'>
                <small>
                    Remaining  {
                        remain
                    }
                </small>
                <button onClick={() => handleAddNote()} className='btn btn-secondary rounded'>
                    Save
                </button>
            </div>





        </div>
    )
}

export default AddNote