import React, { useContext,useEffect } from 'react'
import { LogInContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import LogOutModal from '../LogOutModal'

const AdminProfile = () => {
    const navigate = useNavigate()
    const {currentuser,showModal,setShowModal} = useContext(LogInContext)
    console.log(currentuser.firstName);
    
    useEffect(()=>{
            if(!currentuser){
            navigate("/login")
            }
        },[currentuser,navigate])
  return (
    <>
     {
    showModal && (<LogOutModal/>)
  }
  <div className='grid-cols-1 md:grid-cols-2 flex justify-center items-center'>
  </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div  className="w-full max-w-sm bg-white rounded-lg shadow-md shadow-gray-500 p-6">
       <div className='flex justify-between items-center mb-4'>
          <h2 className="text-2xl font-semibold text-center">ADMIN PROFILE</h2>
         
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
          }  className="w-full py-2 bg-black border border-gray-300 text-white rounded hover:bg-slate-500">
                LOG OUT
          </button>
       </div>
      </div>
    </div> 
     
    </>
  )
}

export default AdminProfile
