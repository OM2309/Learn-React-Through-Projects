import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { getPost } from "../redux/features/PostSlice";
import Spinner from "./Spinner";

const Post = () => {
  const [id, setId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, post } = useSelector((state) => ({ ...state.app }));

  const handleFetchData = (e) => {
    e.preventDefault();
    if (!id) {
      alert("Incorrect request");
    } else {
      dispatch(getPost({ id })); // Dispatch with an object containing 'id'
      setId("");
    }
  };

  return (
    <>
      <div className=" w-full flex items-center justify-center">
        <div className="flex flex-col">
          <label className="text-white text-lg mb-2 text-start ">Search</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="bg-white w-60 rounded-full pl-4 py-2 font-medium text-lg"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={handleFetchData}
          type="submit"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Fetch Post
        </button>
        <button
          onClick={() => navigate("/createpost")}
          type="submit"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Create Post
        </button>
      </div>
      <div className="conteiner">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {post && Object.keys(post).length > 0 && (
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{post.title}</div>
                  <p className="text-gray-700 text-base">{post.body}</p>
                </div>
                <div className="px-6 pt-4 pb-2">{/* Your spans */}</div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Post;
