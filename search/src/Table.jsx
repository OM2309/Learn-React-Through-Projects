import React from "react";

const Table = ({ data }) => {
  return (
    <>
      <div class="relative overflow-x-auto flex items-center justify-center">
        <table class="max-w-xl text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                First Name
              </th>
              <th scope="col" class="px-6 py-3">
               city
              </th>
              <th scope="col" class="px-6 py-3">
               Email
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-white border-b text-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.address.city}</td>
                <td className="px-6 py-4">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
