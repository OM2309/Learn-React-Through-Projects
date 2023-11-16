import { useState } from "react";
const Cards = ({items}) => {
  const [items, setItems] =React.useState(items);
  return (
   <>
   
   <div className="products flex flex-wrap justify-center mt-10">
        {items.map((item) => (
          <div
            className=" max-h-96 max-w-96 card mx-4 my-6 w-64 rounded-lg overflow-hidden shadow-lg"
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
   </>
  )
}

export default Cards