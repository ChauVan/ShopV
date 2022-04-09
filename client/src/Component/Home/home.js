import React from "react";
import Header from "../Home/header"
import Blog from "./blog";
import Footer from "../include/footer";
import Sidebar from "../include/sidebar";
function home() {
  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
      <Header />
     {/* <Blog/> */}
      <Footer />
      </main>
    </div>
  );
}

export default home;
