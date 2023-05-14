import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2 className="pokemonHeading">About</h2>
      <p className="pokemonParagraph">
        Welcome to the Pokemon World! This website is dedicated to providing
        information about the fascinating world of Pokemon. Whether you're a
        seasoned Pokemon Trainer or just starting your journey, you'll find a
        wealth of information and resources here.
      </p>
      <p className="pokemonParagraph">
        Explore the vast collection of Pokemon, learn about their abilities,
        strengths, and weaknesses, and discover the trainers and regions they
        hail from. Our mission is to provide you with the most comprehensive and
        up-to-date information about these incredible creatures.
      </p>
      <p className="pokemonParagraph">
        Join our community of Pokemon enthusiasts, share your experiences, and
        engage in discussions about strategies, battles, and more. We hope this
        website becomes your go-to resource for all things Pokemon.
      </p>
      <p>Start your adventure and dive into the world of Pokemon today!</p>
    </div>
  );
}

export default About;
