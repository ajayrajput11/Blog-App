import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { LogInContext } from "./Context"
import LogOutModal from "./LogOutModal"



const Nav = () => {
  const { currentuser, showModal, setShowModal } = useContext(LogInContext)

  return (
    <>
      {showModal && <LogOutModal />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-zinc-200 text-gray-900 font-semibold p-4 text-lg rounded items-center">
        <div className="flex flex-wrap gap-5 justify-center md:justify-start">
          <NavLink className="hover:underline" to="/">HOME</NavLink>

          {!currentuser && (
            <>
              <NavLink className="hover:underline" to="/login">LOGIN</NavLink>
               
              <NavLink className="hover:underline" to="/signup">SIGNUP</NavLink>
            </>
          )}

          {currentuser && (
            <>
              <NavLink
                className="hover:underline"
                to={
                  currentuser.identity === "admin"
                    ? "/admin/profile"
                    : "/user/profile"
                }
              >
                PROFILE
              </NavLink>
              <NavLink
                className="hover:underline"
                to={
                  currentuser.identity === "admin" ? "/adminblog" : "/userblog"
                }
              >
                BLOG
              </NavLink>
            </>
          )}
        </div>

        <div className="text-center hidden md:block">
  
    <span className="text-gray-900 text-xl font-bold">BLOG APP</span>
  
</div>


        {currentuser && (
          <div className="flex justify-center md:justify-end">
            <button
              onClick={() => setShowModal(true)}
              className="hover:underline"
            >
              LOG OUT
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Nav
