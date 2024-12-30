import React from "react";
import MyChart from "../Components/MyChart";

function Home() {
  return (
    <div>
      <h2 className="text-center mt-5 mb-10 text-3xl font-bold">
        Performance Report
      </h2>
      <MyChart />
    </div>
  );
}

export default Home;
