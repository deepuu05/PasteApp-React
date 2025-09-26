import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/pasteSlice'



const ViewPaste = () => {
    // id nikalne ke liye url se
  const {id} = useParams();
  const allPastes = useSelector((state)=>state.paste.pastes)
 // jiski id aayi hai sirf usse niklane ke liye 
  const paste = allPastes.filter((p)=> p._id===id)[0]

  return (
     <div>
            <div>
                <input
                    type='text'
                    placeholder='enter title here'
                    value={paste.title}
                    disabled
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <textarea
                    value={paste.content}
                    disabled
                    placeholder='enter content here'
                    onChange={(e) => setValue(e.target.value)}

                />
            </div>
        </div>
    )
  
}

export default ViewPaste
