import React from "react";
import Navbar from "./compnents/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="md:fixed md:w-[100%] md:flex md:justify-around md:items-center">
        <div className="flex justify-center item-center text-nowrap">
          <h1 className="font-bold text-2xl lg:text-3xl first-letter:text-red-900">
            Shantinath K.
          </h1>
        </div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
