import { useUpdatePostMutation } from "../services/post";
import { useState } from "react";

const CardUpdate = () => {
  const [updatePost, responseInfo] = useUpdatePostMutation();
  const [isUpdated, setIsUpdated] = useState(false);

  const handleUpdatePost = async () => {
    const updated = {
      
      title: "foo",
      body: "bar",
      userId: 1,
    };

    try {
      await updatePost(updated);
      setIsUpdated(true);
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle error cases if needed
    }
  };

  return (
    <>
      <h1>Redux Toolkit - RTK Query (Update Data)</h1>

      <button
        onClick={handleUpdatePost}
        className=" ml-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Update
      </button>

      {isUpdated && responseInfo.isSuccess && (
        <p>User Updated a post successfully!</p>
        // Render any component or message you want when creation is successful
      )}
    </>
  );
};

export default CardUpdate;
