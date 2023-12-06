import { useGetPostByIdQuery } from "../services/post";

const CardId = () => {
  const { data, isLoading } = useGetPostByIdQuery(2);

  return (
    <div className="flex items-center justify-center mt-4">
      {isLoading ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : data ? (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden mb-4">
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {data.id}. {data.title}
            </h2>
            <p className="mt-2 text-gray-600 text-justify">{data.body}</p>
          </div>
        </div>
      ) : (
        <div>Post not found</div>
      )}
    </div>
  );
};

export default CardId;
