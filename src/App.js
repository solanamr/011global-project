import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Stocks from "./components/Stocks/Stocks";
import SignIn from "./components/SignIn/Singin";
import SingUp from "./components/SignUp/SignUp";
import Token from "./components/Token/Token";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign/login" element={<SignIn />} />
        <Route path="/sign/register" element={<SingUp />} />
        <Route path="/sign/token" element={<Token />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
