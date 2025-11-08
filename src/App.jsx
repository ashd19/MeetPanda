import React from "react";
import Footer from "./components/Footer";
import UseCases from "./components/UseCases";
import GetStarted from "./components/GetStarted";
import Benefits from "./components/Benefits"; 
import SocialProof from "./components/SocialProof";

function App() {
  return (
    <div>
      <Benefits />
      <GetStarted />
      <UseCases />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;
