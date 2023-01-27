import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userInfoContext } from '../../context/userInfo';


const SignIn = () => {

  //useForm invocation functions
  const { register, handleSubmit, formState: { errors }} = useForm();

  //useNavigate hook variable
  const navigate = useNavigate();

  //local state located in a context(hook) for the user's information 
  const { setUserInfo } = useContext(userInfoContext)

  //local state to handle errores
  const [errorUser, setErrorUser] = useState(null);
  


  //React form hook function to submit the information of the form
  const onSubmit = async (data) => {

    //Agent token located in .env file
    const AgentToken = process.env.REACT_APP_TOKEN;

    //information to make post request
    const LOGIN_INFO = { AgentToken, ...data };

    //function to make post request
    try {
      const res = await axios.post(`https://webapi-sta.012global.com/api/DevTest/UserLogin`, LOGIN_INFO);
      setUserInfo(res.data.UserToken);
      res.data.ErrorCode === 2001 && setErrorUser(res.data.Error);
      res.data.ErrorCode === 0 && navigate("/stocks");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-blueLight h-screen">

      <div className="flex justify-end pr-10 pt-3 pb-5">
        <Link to="/">
          <button className="border-2 border-grey p-2 rounded-xl text-blue font-medium hover:bg-grey hover:text-white2 
          transition duration-300">Go back home</button>
        </Link>
      </div>

      <div className="flex justify-center pt-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 border-lightGrey rounded-2xl p-5 h-4/5 w-96"
        >
          <h4 className="text-blue text-xl font-medium text-center pt-10">Hello again!</h4>
          <p className="text-blue text-xl font-medium text-center">Enjoy your stay</p>
        
          <div className="flex flex-col pb-10 pt-10">
            <label className="text-base font-semibold pl-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("Email", 
              {required: "An email is required"})}
              className="border border-lightGrey rounded-xl py-2 px-5"
            />
            {errors.Email && (
              <span className="text-red text-xs">{errors.Email?.message}</span>
            )}
          </div>
        
          <div className="flex flex-col">
            <label className="text-base font-semibold pl-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("Password", 
              {required: "A password is required"})}
              className="border border-lightGrey rounded-xl py-2 px-4"
            />
            {errors.Password && (
              <span className="text-red text-xs">{errors.Password?.message}</span>
            )}
          </div>
          {errorUser && (
            <span className="text-red text-xs text-center w-full">
              {errorUser}, please <Link to="/sign/register">
                <button className="underline">
                  register
                </button>
              </Link> if you don't have an account.
            </span>
          )}
          <button type="submit" className="bg-blue p-2 text-center text-white font-bold rounded-full w-full mt-10">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
