import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth,setAuth] = useAuth();
  return (
    <>
      <div>HomePage</div>
      <pre>{JSON.stringify(auth,null,4)}</pre>
    </>
  );
};

export default HomePage;
