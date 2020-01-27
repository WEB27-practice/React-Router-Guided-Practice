import React from "react";

function Home(props) {
  console.log(props);
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button className="md-button shop-button">Shop now!</button>
    </div>
  );
}

export default Home;
// This component will be what we use in our Route to display our Home page
