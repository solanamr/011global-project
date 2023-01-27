import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Home = () => {
  return (
    <div className="flex justify-center pt-40 bg-blueLight h-screen">
      <div className="w-96 flex-col justify-center border-2 border-lightGrey rounded-2xl h-5/6">
        <p className="text-center pb-5 pt-10 font-bold text-3xl text-blue">Welcome!</p>
        <div className="flex justify-center">
          <img src={logo} alt="logo"/>
        </div>
        <div className="flex justify-center pt-10">
          <Link
            to="/sign/login"
            className="text-center text-blue font-bold px-7 py-3 border-2 border-blue rounded-xl mr-2"
          >
            LOGIN
          </Link>
          <Link
            to="/sign/register"
            className="text-center text-white font-bold px-7 py-3 bg-blue rounded-xl"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
