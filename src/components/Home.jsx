import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-slate-300">
      <div>React & Nextjs Component</div>
      <div className="flex flex-col justify-center items-center w-full h-full p-8">
        <div className="p-4">
          <h1>Ui-Animation</h1>
        </div>
        <div>
          <h1>Ui-Component</h1>
          <div className="p-4">
            <ul>
              <li>
                <Link to="/devshow">DevShow</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
