import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import './Paste.css'
import { removeFromPastes } from '../redux/pasteSlice'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
const paste = () => {
    const pastes = useSelector((state) => state.paste.pastes) // state ko fetch krane k liye
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('')
    const filterData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()))

    function handleDelete(pasteId) {

        dispatch(removeFromPastes(pasteId))
    }


    return (
        <div id='main-div'>
            <h1>All Pastes</h1>
            <div id='search-box'>
                <input type="text"
                    placeholder='search here'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div id='cards'>
                {
                    filterData.length > 0 ?
                        filterData.map((paste) => {
                            return (
                                <div className='card'>
                                    <div id='btns-div'>
                                        <div>
                                            <h3>{paste.title}</h3>
                                        </div>
                                        <div className='btn'>
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText(paste?.content)
                                                    toast.success("Copied to clipboard")
                                                }

                                                }> Copy</button>
                                            <button>
                                                <Link className='links' to={`/pastes/${paste?._id}`}>View</Link>
                                            </button>
                                            <button>  <Link className='links' to={`/?pasteId=${paste?._id}`}>Edit</Link>
                                            </button>
                                            {/* <button> Share</button> */}
                                            <button onClick={() => handleDelete(paste?._id)}> Delete</button>
                                        </div>

                                    </div>
                                    <div>
                                        {paste.content}
                                    </div>

                                    <div className='date'>
                                        Created Date :{paste.createdAt.slice(0,10)}
                                    </div>

                                </div>
                            )
                        })
                        : <p>No record found</p>
                }
            </div>
        </div>
    )
}

export default paste
