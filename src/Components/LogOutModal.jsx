import React, { useContext } from 'react'
import { LogInContext } from './Context'
import { useNavigate } from 'react-router-dom'

const LogOutModal = () => {
  const navigate = useNavigate()

  const {showModal,setShowModal,logOut} = useContext(LogInContext)
const onLogout=()=>{
  logOut()
  navigate("/login")
}
  return (
    <>
    {
       showModal &&    
   (
        <div className="backdrop-blur-sm bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center ">
          <div className="bg-black w-80 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4 text-white">Are you sure you want to log out</h2>
            <div className='flex justify-center gap-4'>
            <button
            onClick={onLogout} 
            className='bg-slate-400 hover:bg-slate-100 text-black px-4 py-2 rounded'
            >
              Log Out
            </button>
            <button
            onClick={()=>setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
            >
              Not Sure
            </button>
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default LogOutModal
