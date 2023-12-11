import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import PageNotFound from "./pages/PageNotFound";
import Category from "./pages/Category";
import Register from "./pages/Auth/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Function to trigger a sample toast notification
  // const notify = () => {
  //   toast.success("This is a sample toast notification!", {
  //     position: "bottom-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer /> {/* Place the ToastContainer at the root of your app */}
      {/* Call notify function wherever you want to display a toast */}
      {/* For example, within a component or an event handler */}
      {/* <button onClick={notify}>Show Toast</button> */}
    </>
  );
};

export default App;
