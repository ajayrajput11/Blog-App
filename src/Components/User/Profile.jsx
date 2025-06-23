import React, { useContext, useEffect } from 'react'
import { LogInContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import LogOutModal from '../LogOutModal'

const Profile = () => {
    const {currentuser,showModal,setShowModal} = useContext(LogInContext)
    const navigate = useNavigate();
    useEffect(()=>{
        if(!currentuser){
            navigate("/login")
        }
    },[currentuser,navigate])

    
if (!currentuser) return null
  return (<>
  {
    showModal && (<LogOutModal/>)
  }
  <div className='grid-cols-1 md:grid-cols-2 flex justify-center items-center'>
  </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div  className="w-full max-w-sm bg-gray-50 rounded-lg shadow-sm shadow-gray-400 p-6">
       <div className='flex justify-between items-center mb-4'>
          <h2 className="text-2xl font-semibold text-center">USER PROFILE</h2>
         
      </div>
      <div className='space-y-3'>
         <div>
            <strong>Name:</strong> <span>{currentuser.firstName}  {currentuser.lastName}</span>
          </div>
          <div>
            <strong>Email:</strong> <span>{currentuser.email}</span>
          </div>
          <div>
            <strong>Contact:</strong> <span>{currentuser.phone}</span>
          </div>
          <button  onClick={()=>setShowModal(true)
          }  className="w-full py-2 px-2 bg-gray-500 border border-gray-500 text-white rounded hover:bg-gray-900">
                LOG OUT
          </button>
       </div>
      </div>
    </div>
      </>

  )
}


export default Profile
