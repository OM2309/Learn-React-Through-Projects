import { useGetAllPostQuery } from "../services/post";

const Card = () => {
  const { data } = useGetAllPostQuery();

  return (
    <div className="flex items-center justify-center mt-4 flex-wrap">
      {data.map((postData) => (
        <div
          key={postData.id} // Adding a unique key for each card based on post ID
          className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden mb-4"
        >
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-800">
            {postData.id}. {postData.title}
            </h2>
            <p className="mt-2 text-gray-600">
              {postData.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
