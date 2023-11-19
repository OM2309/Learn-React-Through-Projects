import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const data = useSelector((store) => {
    return store.show.value; // Return the value you want to access
  });

  console.log(data); // Log the retrieved value

  return <>Hello</>;
}

export default App;
