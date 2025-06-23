import { createContext,useState } from "react";


export const LogInContext = createContext();

export const LogInProvider = ({children}) => {

    const [users,setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [currentuser,setCurrentUser] =useState(JSON.parse(localStorage.getItem("currentUser")) || null)
    const [showModal,setShowModal] = useState(false);
    const [allblogs, setAllBlogs] = useState(()=>{
      const saved = localStorage.getItem("blogs")
      return saved ? JSON.parse(saved):[]
    })

 const saveAdminBlog = (blog) => {
  const updated = allblogs.filter(b => b.id !== blog.id);
  const newBlogs = [...updated, blog];
  setAllBlogs(newBlogs);
  localStorage.setItem("blogs", JSON.stringify(newBlogs));
};


const deleteAdminBlog = (id) => {

  const updated = allblogs.filter(blog => blog.id !== id);

  setAllBlogs(updated);
  localStorage.setItem("blogs", JSON.stringify(updated));
};


   
    const SignUp = (newUser) => {

        const existUser =  users.find((user)=>user.email === newUser.email);
      
        console.log(existUser, users)
        if (existUser) {
            alert("user already exists")
            return (false)
        }
        setUsers([...users,newUser])
        localStorage.setItem("users",JSON.stringify([...users,newUser]))
        alert("user registered succesfully")
        return true
    }
    const LogInn = (email,password) => {
        const userFind = users.find((user)=>email=== user.email && password===user.password || password==="googlr_oauth_password");
        if (userFind) {
            setCurrentUser(userFind)
            localStorage.setItem("currentUser",JSON.stringify(userFind))
            return true
        }
            else{
                alert("invalid email or password")
                return false
            }
    }
    const forgetPassword = (email) => {
    const userData = users.find((value) => value.email === email);
    if (userData) {
      alert(`Your password is: ${userData.password}`);
    } else {
      alert("No user found with that email");
    }
  };
  
  const logOut = () =>{
    setShowModal(false)
    setCurrentUser(null)
    localStorage.removeItem("currentuser")
    alert("loged out successfully")
  }

    return (
        <>
        <LogInContext.Provider value={{logOut,saveAdminBlog,deleteAdminBlog,allblogs,showModal,setShowModal,users,currentuser,SignUp,LogInn,forgetPassword}}>
            {children}
        </LogInContext.Provider>
        </>
    )
}