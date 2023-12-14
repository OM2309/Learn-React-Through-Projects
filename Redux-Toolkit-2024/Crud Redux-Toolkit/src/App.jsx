import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;
