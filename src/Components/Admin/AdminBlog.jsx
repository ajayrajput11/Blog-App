import React, { useContext ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { LogInContext } from '../Context';
import DeleteModal from './DeleteModal'; 

const AdminBlog = () => {
  const navigate = useNavigate();
  const { currentuser,allblogs,deleteAdminBlog } = useContext(LogInContext);
    const [showModal, setShowModal] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  
  const handleEdit = (blog) => {
    navigate('/admineditor', { state: { blog } });
  }
   const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  }
   const confirmDelete = () => {
    deleteAdminBlog(selectedId);
    setShowModal(false);
    setSelectedId(null);
  }
   const cancelDelete = () => {
    setShowModal(false);
    setSelectedId(null);
  }
 
   return (
  <div className="p-6 gap-5">
    <h2 className="text-xl font-semibold mb-4 gap-5 mt-5">ADMIN BLOGS</h2>

    {currentuser?.identity === 'admin' && (
      <button
        onClick={() => navigate("/admineditor")}
        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-slate-400 transition"
      >
        Create New Blog
      </button>
    )}

    {allblogs.length === 0 ? (
      <p className='text-gray-500 mt-5'>No blogs available. Start writing!</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        {allblogs.map((blog) => {
          return (
            <div key={blog.id} className="p-4 border rounded shadow bg-white">
              <h3 className="text-xl font-semibold">{String(blog.title)}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: typeof blog.content === 'string' ? blog.content : '' }}
                className="mt-2 text-sm text-gray-700 max-h-48 overflow-auto"
              />
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(blog.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    )}

    {showModal && (
      <DeleteModal onConfirm={confirmDelete} onCancel={cancelDelete} />
    )}
  </div>
);

   
}

export default AdminBlog;

