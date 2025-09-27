import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/pasteSlice'
import './Home.css'

const Home = () => {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId')
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes)

    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId)
            setTitle(paste.title)
            setValue(paste.content)

        }
    }, [pasteId])
    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

        if (pasteId) { // agar id  hai to
            // update
            dispatch(updateToPastes(paste));

        } else { // agar id nhi hai to
            // create
            dispatch(addToPastes(paste))

        }
        // after creation or updation cleaning
        setTitle('')
        setValue('')
        setSearchParams({})
    }


    return (
        <div id='outer-box'>
            <div className='inner-box1'>
                <input
                    type='text'
                    placeholder='enter title here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={createPaste}>
                    {
                        pasteId ?
                            "Update Paste"
                            :
                            "Create My Paste"}</button>
            </div>
            <div className='inner-box2'>
                <textarea
                    value={value}
                    placeholder='enter content here'
                    onChange={(e) => setValue(e.target.value)}

                />
            </div>
        </div>
    )
}

export default Home
