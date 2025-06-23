import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn"
import SignUp from "./Components/SignUp"
import Nav from './Components/Nav'
import Home from "./Components/Home"
import { LogInProvider } from "./Components/Context"
import Profile from "./Components/User/Profile"
import AdminProfile from "./Components/Admin/AdminProfile"
import AdminBlog from "./Components/Admin/AdminBlog"
import UserBlog from "./Components/User/UserBlog"
import AdminEditor from "./Components/Admin/AdminEditor"
import BlogDetails from "./Components/User/BlogDetails"
const App = () => {
  return (
    <>
     <BrowserRouter>
    <LogInProvider>
    <Nav/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
       <Route path="/user/profile" element={<Profile/>}/>
       <Route path="/admin/profile" element={<AdminProfile/>}/>
        <Route path="/adminblog" element={<AdminBlog/>}/>
        <Route path="/userblog" element={<UserBlog />} />
        <Route path="/userblog/:id" element={<BlogDetails />} />
        <Route path="/admineditor" element={<AdminEditor />} />
    </Routes>
    </LogInProvider>
    </BrowserRouter>
    </>
  )
}
export default App;