const Card = () => {
  return (
    <>
      <h1 className="text-center font-bold text-lg mt-4 uppercase">Skills</h1>
      <div className="flex items-center justify-between m-4">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            FRONTEND
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                HTML
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                CSS
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                JS
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                REACT
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                NEXT JS
              </li>
             
            </ul>
          </p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            BACKEND
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                NODE
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                EXPRESS JS
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                MONGO DB
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                PHP
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                MYSQL 
              </li>
             
            </ul>
          </p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            OTHERS
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                GIT
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
               GITHUB
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                PRISMA
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                TAILWIND CSS
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                BOOTSTRAP
              </li>
             
            </ul>
          </p>
        </a>
      </div>
    </>
  );
};

export default Card;
