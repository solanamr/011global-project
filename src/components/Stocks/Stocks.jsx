import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userInfoContext } from "../../context/userInfo";
import axios from "axios";
import DetailStock from "./DetailStock";
import { Link } from "react-router-dom";

const Stocks = () => {

  //useNavigate hook variable
  const navigate = useNavigate();

  //local state located in a context(hook) for the user's information 
  const { userInfo } = useContext(userInfoContext);

  //local state to save stocks
  const [stocks, setStocks] = useState([]);

  //post request to get the stocks
  const getStocks = async () => {
    try {
      const res = await axios.post("https://webapi-sta.012global.com/api/DevTest/GetStockPrices", { UserToken: userInfo });
      setStocks(res.data.Prices);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect(hook) function
  useEffect(() => {

    //invocation to getStocks function
    getStocks();
  }, []);
  

  //useEffect to set user's session and update of stocks
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 120000);

    const timer = setInterval(() => {
      getStocks();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-blueLight h-full">
      <h2 className="text-3xl text-center text-black font-bold tracking-widest pt-10 pb-5">
        STOCKS
      </h2>
      <div className="flex justify-center pt-3 pb-5">
        <Link to="/">
          <button
            className="border-2 border-grey p-2 rounded-xl text-blue font-medium hover:bg-grey hover:text-white2 
          transition duration-300"
          >
            Go back home
          </button>
        </Link>
      </div>
      <DetailStock detail={stocks} />
    </div>
  );
};

export default Stocks;
