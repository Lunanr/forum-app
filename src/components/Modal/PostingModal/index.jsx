import { IoMdClose } from "react-icons/io";
import useInput from "../../../hooks/useInput";

const PostingModal = ({ isOpen, onClose, newThreads }) => {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [treads, onThreadsChange] = useInput('');

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter">
          <div className="w-[500px] h-[400px] p-4 bg-gradient-to-tr from-[#4982f5ef] to-[#D2E0FA] rounded-2xl">
            {/* Header */}
            <div className="flex justify-between mb-4">
              <h2>Buat Diskusi Baru</h2>
              <button onClick={() => onClose(false)}>
                <IoMdClose />
              </button>
            </div>
            {/* Body */}
            <form className="flex flex-col gap-4">
              <input className="p-1 px-3 rounded-xl" type="text" value={title} onChange={onTitleChange} placeholder="Title" />
              <input className="p-1 px-3 rounded-xl" type="text" value={category} onChange={onCategoryChange} placeholder="Category" />
              <textarea className="p-1 px-3 rounded-xl h-24" value={treads} onChange={onThreadsChange} placeholder="Threads">
              </textarea>
            </form>
            {/* Footer */}
            <button className=" bg-blue-300 px-5 py-2 rounded-xl hover:bg-blue-700 mt-4 w-full" type="submit" onClick={() => newThreads({ title, category, treads })}>Buat</button>
          </div>
        </div>
      )}
    </>
  )
}

export default PostingModal;