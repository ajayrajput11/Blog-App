import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";
import { useLocation,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LogInContext } from "../Context";
import "./Admin.css";

const LICENSE_KEY =
  "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NTE0MTQzOTksImp0aSI6IjQwMGViNjc5LWY3NTUtNDk5OC04MDY1LTliODAwN2EyY2RmNSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImIxMWQzMTk0In0.IV2NmoovXlmBQ9aZZ_-4zTlORlhDb-ps_XZhMID7LimCAG96p9if4Xx3C-bRpxR6h20REO2NfwBQP4iX_CQG-g";

const AdminEditor = () => {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [editorData, setEditorData] = useState("");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const cloud = useCKEditorCloud({ version: "45.2.0" });
   const { state } = useLocation();
  const { blog } = state || {};
  const navigate = useNavigate();
  const saveButtonRef = useRef(null)
  const { saveAdminBlog, deleteAdminBlog } = useContext(LogInContext);

  useEffect(()=>{
     if (saveButtonRef.current){
      saveButtonRef.current.disabled = title.trim().length<5
    }
  },[title])
  useEffect(() => {
    setIsLayoutReady(true);
    if (blog){
        setTitle(blog.title)
        setEditorData(blog.content)
    }
    return () => setIsLayoutReady(false);
  }, [blog]);

  const { ClassicEditor, editorConfig } = useMemo(() => {
    if (cloud.status !== "success" || !isLayoutReady) {
      return {};  
    }
    const {
      ClassicEditor,
      AutoImage,
      Autosave,
      BalloonToolbar,
      BlockQuote,
      BlockToolbar,
      Bold,
      Essentials,
      Heading,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      Paragraph,
      SimpleUploadAdapter,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TodoList,
      Underline,
    } = cloud.CKEditor;

    return {
      ClassicEditor,
      editorConfig: {
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "link",
            "insertImage",
            "insertImageViaUrl",
            "insertTable",
            "blockQuote",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "outdent",
            "indent",
          ],
          shouldNotGroupWhenFull: false,
        },
        plugins: [
          AutoImage,
          Autosave,
          BalloonToolbar,
          BlockQuote,
          BlockToolbar,
          Bold,
          Essentials,
          Heading,
          ImageBlock,
          ImageCaption,
          ImageInline,
          ImageInsert,
          ImageInsertViaUrl,
          ImageResize,
          ImageStyle,
          ImageTextAlternative,
          ImageToolbar,
          ImageUpload,
          Indent,
          IndentBlock,
          Italic,
          Link,
          LinkImage,
          List,
          ListProperties,
          Paragraph,
          SimpleUploadAdapter,
          Table,
          TableCaption,
          TableCellProperties,
          TableColumnResize,
          TableProperties,
          TableToolbar,
          TodoList,
          Underline,
        ],
        balloonToolbar: [
          "bold",
          "italic",
          "|",
          "link",
          "insertImage",
          "|",
          "bulletedList",
          "numberedList",
        ],
        blockToolbar: [
          "bold",
          "italic",
          "|",
          "link",
          "insertImage",
          "insertTable",
          "|",
          "bulletedList",
          "numberedList",
          "outdent",
          "indent",
        ],
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },
        image: {
          toolbar: [
            "toggleImageCaption",
            "imageTextAlternative",
            "|",
            "imageStyle:inline",
            "imageStyle:wrapText",
            "imageStyle:breakText",
            "|",
            "resizeImage",
          ],
        },
        licenseKey: LICENSE_KEY,
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          decorators: {
            toggleDownloadable: {
              mode: "manual",
              label: "Downloadable",
              attributes: {
                download: "file",
              },
            },
          },
        },
        list: {
          properties: {
            styles: true,
            startIndex: true,
            reversed: true,
          },
        },
        menuBar: {
          isVisible: true,
        },
        placeholder: "Type or paste your content here!",
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
          ],
        },
      },
    };
  }, [cloud, isLayoutReady]);
    const handleSave = () => {
    const id = blog?.id || Date.now()
    const newBlog = { id, title, content: editorData }
    saveAdminBlog(newBlog)
    navigate("/adminblog")
  };
  const handleDelete = () => {
    if (blog?.id) {
      deleteAdminBlog(blog.id)
    }
    setShowModal(false)
    navigate("/adminblog")
  };
  return (
    <div className="main-container">
        <div className="mt-5 flex-wrap">
            <h3 className="gap-2 flex mb-3 text-black font-bold">ADMIN BLOG EDITOR</h3>
             <input
        type="text"
        className="mb-4 w-full p-2 border rounded"
        placeholder="Enter Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
        </div>
      <div
        className="editor-container editor-container_classic-editor editor-container_include-block-toolbar"
        ref={editorContainerRef}
      >
        <div className="editor-container__editor">
          <div ref={editorRef}>
            {ClassicEditor && editorConfig && (
              <CKEditor data={editorData} onChange={(event,editor)=>{setEditorData(editor.getData())}} editor={ClassicEditor} config={editorConfig} />
            )}
          </div>
        </div>
        <div className="flex gap-4 mt-5">
        <button
        ref={saveButtonRef}
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Save Blog
        </button>
        <button
        className="bg-gray-400 text-white px-4 py-2 rounded"
        onClick={()=>navigate("/adminblog")}
        >
          cancle
        </button>
          {
            blog && (
              <button
            onClick={() => setShowModal(true)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete Blog
          </button>
            )
          }
       
      </div>
       {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this blog?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
                <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default AdminEditor;
