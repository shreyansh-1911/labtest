import React from 'react';
import '../App.css';

function Home() {
  return (
    <>
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/signup">Account</a>
      </div>

      <div className="home-content">
        <h2>Welcome to the Home Page</h2>
        <p>This is a protected page accessible after login.</p>

        <div className="carousel">
          <div className="carousel-track">
            <div className="carousel-card">
              <img src="image1.jpg" alt="Card 1" />
              <p>Image 1</p>
            </div>
            <div className="carousel-card">
              <img src="image2.jpg" alt="Card 2" />
              <p>Image 2</p>
            </div>
            <div className="carousel-card">
              <img src="image3.jpg" alt="Card 3" />
              <p>Image 3</p>
            </div>
            <div className="carousel-card">
              <img src="image4.jpg" alt="Card 4" />
              <p>Image 4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
