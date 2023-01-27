import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SingUp = () => {

  //useForm invocation functions
  const { register, handleSubmit, formState: { errors }} = useForm();

  //useNavigate hook variable
  const navigate = useNavigate();

  //local state to handle errores
  const [errorUser, setErrorUser] = useState(null);
  
  //React form hook function to submit the information of the form
  const onSubmit = async (data) => {
    
    //Agent token located in .env file
    const AgentToken = process.env.REACT_APP_TOKEN;

    //setting the email to the data parameter
    const { Email } = data;

    //information to make post request
    const VERIFICATION_INFO = { AgentToken, Email };
    const REGISTER_INFO = { AgentToken, ...data };

    //verification token post request
    const resVerification = await axios.post("https://webapi-sta.012global.com/api/DevTest/SendVerificationEmail", VERIFICATION_INFO);

    //add user post request
    if (resVerification.data.ErrorCode === 0) {
      try {
        const res = await axios.post("https://webapi-sta.012global.com/api/DevTest/AddUser", REGISTER_INFO);
        res.data.ErrorCode === 2000 && setErrorUser(res.data.Error);
        res.data.ErrorCode === 0 && navigate("/sign/token");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-blueLight h-screen">
      <div className="flex justify-end pr-10 pt-3 pb-5">
        <Link to="/">
          <button
            className="border-2 border-grey p-2 rounded-xl text-blue font-medium hover:bg-grey hover:text-white2 
          transition duration-300"
          >
            Go back home
          </button>
        </Link>
      </div>

      <div className="flex justify-center pt-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 border-blue rounded-2xl p-5 h-4/5 w-96 bg-blue"
        >
          <h4 className="text-white2 text-xl font-medium text-center pt-10">
            Register
          </h4>
          <p className="text-white2 text-xl font-medium text-center">
            Happy to see you join us!
          </p>

          <div className="flex flex-col pb-10 pt-10">
            <label className="text-base text-white2 font-semibold pl-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("Email", { required: "An email is required" })}
              className="border border-lightGrey rounded-xl py-2 px-5"
            />
            {errors.Email && (
              <span className="text-red text-xs">{errors.Email.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-base text-white2 font-semibold pl-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("Password", { required: "A password is required" })}
              className="border border-lightGrey rounded-xl py-2 px-4"
            />
            {errors.Password && (
              <span className="text-red text-xs">
                {errors.Password.message}
              </span>
            )}
          </div>
          {errorUser && (
            <span className="text-red text-xs text-center w-full">
              {errorUser}, please{" "}
              <Link to="/sign/login">
                <button
                  onClick={() => setErrorUser(null)}
                  className="underline"
                >
                  login.
                </button>
              </Link>
            </span>
          )}
          <button
            type="submit"
            className="border-2 border-lightGrey p-2 text-center text-white2 font-bold 
            rounded-full w-full mt-10 mb-10 hover:bg-lightGrey hover:text-blue transition duration-300"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
