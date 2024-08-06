import { Link } from "react-router-dom";
import FileExplorer from "./FileExplorer";

const Home = () => {
  return (
    <>

    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-600">
     
    <FileExplorer />
    </div>
    </>
  );
};

export default Home;
