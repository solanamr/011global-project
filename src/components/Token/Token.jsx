import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Token = () => {
  return (
    <div className="bg-blueLight h-screen">
      <div className="flex justify-center pt-10">
        <img src={logo} alt="" />
      </div>
      <h4 className="text-blue text-2xl font-semibold text-center pt-20">
        Please enter the token we send you to your e-mail to access our site
      </h4>
      <div className="flex justify-center pt-20">
        <input
          type="text"
          className="border border-lightGrey rounded-xl py-2 px-5"
        />
        <Link to="/stocks">
          <button
            className="ml-4 px-4 py-2 bg-blue4 rounded-xl font-medium text-base
                     text-white2 hover:bg-blueLight hover:border border-blue4
                      hover:text-blue4 transition duration-300"
          >
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Token;
