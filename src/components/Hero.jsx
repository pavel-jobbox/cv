import React from "react";
import SocialMedia from "./SocialMedia";

export default function Hero() {
  return (
    <section className="section hero">
      <div className="hore-block hore-block_content">
        <div className="hero-baner">
          <h1 className="hero__title">
            Hello I`am
            <span className="text-bold "> Opanasenko Pavlo. Frontend</span>
            <span className="text-stroke"> Developer</span> from
            <span className="text-bold "> Ukraine</span>
          </h1>
          <p className="paragraph">
            I'm Opanasenko Pavlo Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to specimen book.
          </p>
        </div>
        <SocialMedia/>
      </div>

      <div className="hore-block hore-block_image"></div>
    </section>
  );
}
