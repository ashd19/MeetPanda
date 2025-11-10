import React from "react";
import Footer from "./components/Footer";
import UseCases from "./components/UseCases";
import GetStarted from "./components/GetStarted";
import Benefits from "./components/Benefits";
import SocialProof from "./components/SocialProof";
import Workflow from "./components/WorkFlow";

function App() {
  return (
    <div>
      <Benefits />
      <GetStarted />
      <Workflow />
      <UseCases />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;
