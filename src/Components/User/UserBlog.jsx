import React, { useContext } from "react";
import { LogInContext } from "../Context";
import {useNavigate} from 'react-router-dom'

const UserBlog = () => {
  const navigate = useNavigate()
  const { allblogs } = useContext(LogInContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">All Blogs</h2>

      {allblogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs available yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allblogs.map((blog) => (
            <div
              key={blog.id}
              onClick={()=>navigate(`/userblog/${blog.id}`)}
              className="p-5 rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-600">{blog.title}</h3>
              <div
                className="text-gray-700 text-sm mt-2 max-h-48 overflow-auto"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserBlog;
