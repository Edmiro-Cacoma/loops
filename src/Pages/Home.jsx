import React from "react";
import Header from "../Components/Header/Header";
import Showcase from "../Components/Showcase/Showcase";
import Gallery from "../Components/Gallery/Gallery";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Showcase />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};
export default Home;
