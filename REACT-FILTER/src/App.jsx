import { useState } from "react";
import { Items } from "./items";
import "./App.css";

const App = () => {
  const [items, setItems] = useState(Items);
  const [search, setSearch] = useState("");

  const filterItems = (category) => {
   
    if (category === "All") {
      setItems(Items);
    } else {
      const filteredItems = Items.filter((item) => item.category === category);
      setItems(filteredItems);
    }

    if (search !== "") {
      const filteredBySearch = Items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setItems(filteredBySearch);
    }

  };



  return (
    <div className="container mx-auto">
      <div className="heading flex justify-center items-center mt-4">
        <h1 className="text-lg uppercase text-gray-600 font-bold">
          Items Filter
        </h1>
      </div>
      <div className="buttons mt-10 flex justify-center space-x-4">
        <button
          className="btn text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => filterItems("All")}
        >
          All
        </button>
        <button
          className="btn btn-green focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => filterItems("men's clothing")}
        >
          Men
        </button>
        <button
          className="btn btn-red focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => filterItems("women's clothing")}
        >
          Women
        </button>
        <button
          className="btn btn-yellow focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          onClick={() => filterItems("electronics")}
        >
          Electronics
        </button>
        <button
          className="btn btn-purple focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={() => filterItems("jewelery")}
        >
          Jewelry
        </button>
        <div className="flex items-center justify-center ">
          <input
            type="text"
            placeholder="Search here"
            className="bg-gray-700 rounded-lg h-11 text-ms font-medium text-white"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="button"
            className=" ml-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => filterItems("All")}
         
         >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>
      </div>

      <div className="products flex flex-wrap justify-center mt-10">
        {items.map((item) => (
          <div
            className=" max-h-65 max-w-96 card mx-4 my-6 w-64 rounded-lg overflow-hidden shadow-lg"
            key={item.id}
          >
            <img
              className="h-40 w-full object-contain"
              src={item.image}
              alt="Product"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <p className="text-gray-700 text-base">Price: ${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
