import { useContext } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { LogInContext } from '../Context'

const BlogDetails = () => {
    const {id} = useParams()
    const naviagte = useNavigate()
    const{allblogs}=useContext(LogInContext)
    const blog = allblogs.find((b)=> String(b.id)===id)
    console.log(blog)
  return (
    <>
      <div className='p-6 max-w-3xl mx-auto bg-white mt-10 rounded-xl shadow'>
            <button
            onClick={()=>naviagte("/userblog")}
            className='text-gray-600 hover:underline mb-4 block mt-5'
            >
                Back To Blogs
            </button>
            <h1 className='text-3xl font-bold mb-4 text-gray-700'>{blog.title}</h1>
            <div className='text-gray-800 leading-relaxed'
            dangerouslySetInnerHTML={{__html:blog.content}}
            >
            </div>
      </div>
    </>
  )
}

export default BlogDetails
