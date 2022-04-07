import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Blog from "./blog";
import Category from "./category";
import Hero from "./hero";
import Footer from "./footer";

function home() {
  return (
    <div>
      <Sidebar />
      <main className="main-wrap">
      <Header />
      <Hero />
      <Category />
      <Footer />
      </main>
    </div>
  );
}

export default home;
