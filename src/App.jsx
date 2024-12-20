import { Outlet } from "react-router-dom";
import Hero from "./pages/Hero";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      <LandingPage />
      <Hero />
      <Outlet />
    </>
  );
};

export default App;
