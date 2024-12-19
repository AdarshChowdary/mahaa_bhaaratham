import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";

const App = () => {

  return (
    <>
      <LandingPage/>
      <Hero/>
      <Outlet/>
    </>
  );
};

export default App;
