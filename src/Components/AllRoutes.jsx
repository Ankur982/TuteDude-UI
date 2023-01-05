import React from "react";
import { Route, Routes } from "react-router-dom";
import ReferAndEarn from "../Pages/ReferAndEarn";
import FriendReferral from "../Pages/FriendReferral";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<FriendReferral />} />
        <Route path={"/referAndEarn"} element={<ReferAndEarn />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
