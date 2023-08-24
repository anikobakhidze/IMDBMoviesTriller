import React from "react";
import HomeSection from "../../components/homeSection/HomeSection.jsx";
import useDocumentTitle from "../../hook/useDocumentTitle.jsx";
function Home() {
  useDocumentTitle("Top IMDB movies");
  return <HomeSection />;
}

export default Home;
