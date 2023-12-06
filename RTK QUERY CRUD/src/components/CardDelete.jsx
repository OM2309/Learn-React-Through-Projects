import { useDeletePostMutation } from "../services/post";
import { useState } from "react";

const CardDelete = () => {
  const [deletePost, responseInfo] = useDeletePostMutation();
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    // Assuming postId is a variable that holds the ID of the post to delete
    const postId = 4; // Replace this with the appropriate post ID
    try {
      await deletePost(postId);
      setIsDeleted(true);
    } catch (error) {
      console.error("Error deleting post:", error);
      // Handle error cases if needed
    }
  };

  return (
    <>
      <h1>Redux Toolkit - RTK Query (Delete Data)</h1>

      <button onClick={handleDelete} className=" ml-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>

      {isDeleted && responseInfo.isSuccess && <p>Post deleted successfully!</p>}
    </>
  );
};

export default CardDelete;
