import { FaThumbsUp, FaRegThumbsUp, FaThumbsDown, FaRegThumbsDown } from "react-icons/fa";
import { BsChatLeftDots } from "react-icons/bs";

const ThreadsItem = () => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <header>
        <span className="rounded-lg px-4 py-1 bg-blue-300">
          #Lunan
        </span>
        <h1 className="mt-5">
          <a href="">Siapakah seorang lunan</a>
        </h1>
      </header>
      <div>
        Coba ceritakan bagaimana ciri ciri seorang lunan
      </div>
      <footer className="flex flex-row mb-2 gap-5 items-center p-1">
        <button className="cursor-pointer flex items-center gap-1">
          <FaThumbsUp /> 0
        </button>
        <button className=" cursor-pointer flex items-center gap-1">
          <FaThumbsDown /> 0
        </button>
        <span className="flex items-center gap-2">
          <BsChatLeftDots /> 0
        </span>
        <span>
          500 hari yang lalu
        </span>
        <span>
          Dibuat oleh <strong>Lunan</strong>
        </span>
      </footer>
    </div >
  );
}

export default ThreadsItem;