const Education = () => {
  return (
    <>
      <div className="text-center font-bold text-lg mt-4 uppercase">Education</div>
         <div className="flex items-center justify-center mb-4">
         <div className="max-w-FULL bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <ul
    className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
    id="defaultTab"
    data-tabs-toggle="#defaultTabContent"
    role="tablist"
  >
    <li className="me-2">
      <button
        id="about-tab"
        data-tabs-target="#about"
        type="button"
        role="tab"
        aria-controls="about"
        aria-selected="true"
        className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
      >
        CLASS 10TH
      </button>
    </li>
    <li className="me-2">
      <button
        id="services-tab"
        data-tabs-target="#services"
        type="button"
        role="tab"
        aria-controls="services"
        aria-selected="false"
        className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      >
        CLASS 12TH
      </button>
    </li>
    <li className="me-2">
      <button
        id="statistics-tab"
        data-tabs-target="#statistics"
        type="button"
        role="tab"
        aria-controls="statistics"
        aria-selected="false"
        className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      >
        BCA
      </button>
    </li>
  </ul>
  <div id="defaultTabContent">
    <div
      className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
      id="about"
      role="tabpanel"
      aria-labelledby="about-tab"
    >
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
       KESHAR EDUCATION ACADEMY , PORSA (M.P).
      </h2>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        PERCENTAGE: 84%
      </p>
   
    </div>
    <div
      className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
      id="services"
      role="tabpanel"
      aria-labelledby="services-tab"
    >
      <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
      KESHAR EDUCATION ACADEMY , PORSA (M.P).
      </h2>
      {/* List */}
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        PERCENTAGE: 89%
      </p>
   
    </div>
    <div
      className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
      id="statistics"
      role="tabpanel"
      aria-labelledby="statistics-tab"
    >
         <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
      PRESTIGE INSTITUTE OF MANAGEMENT & RESEARCH , GWALIOR (M.P).
      </h2>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        CGPA: 8.6
      </p>
    </div>
  </div>
</div>


         </div>
         
    </>
  );
};

export default Education;
