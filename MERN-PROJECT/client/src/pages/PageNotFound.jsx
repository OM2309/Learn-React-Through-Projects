import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen -mt-20 px-2 md:px-0 overflow-hidden">
        <div>
          <p className="text-6xl font-bold text-black">404 error</p>
          <h1 className="mt-3 text-xl font-semibold text-gray-800 md:text-3xl">
            We can&#39;t find that page
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesn&#39;t exist or has been
            moved.
          </p>
          <div className="mt-6 flex items-center space-x-3">
            <NavLink
              to="/"
              className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <line x1={19} y1={12} x2={5} y2={12} />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Go back
            </NavLink>
            <NavLink
              to="/contact"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
