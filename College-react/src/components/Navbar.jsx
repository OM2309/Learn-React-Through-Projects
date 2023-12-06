

const Navbar = () => {
  return (
    <>
       
       <>
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a
        href="https://flowbite.com"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
      
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
         Anurag Sharma
        </span>
      </a>
      <div className="flex items-center space-x-6 rtl:space-x-reverse">
        <a
          href="tel:5541251234"
          className="text-lg  text-gray-500 dark:text-white hover:underline"
        >
          9926003434
        </a>
      
      </div>
    </div>
  </nav>
  <nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
      <div className="">
         <h1 className="text-center text-white text-lg">anurag@gmail.com</h1>
      </div>
    </div>
  </nav>
</>

    
    </>
  )
}

export default Navbar