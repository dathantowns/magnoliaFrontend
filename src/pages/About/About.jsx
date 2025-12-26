import "./About.css";
import frontImg from "../../assets/magnoliaFront.jpeg";
import assBatch from "../../assets/assortedBatch.png";

function About() {
  return (
    <div className="about">
      <h1 className="about__title">Our Company</h1>
      <img
        src={frontImg}
        alt="Magnolia Bakery Front"
        className="about__image"
      />
      <h2 className="about__header">Our Location</h2>
      <h2 className="about__subheader">
        9701 Rosedale Hwy Bakersfield, CA 93312
      </h2>
      <p className="about__text">
        This Rosedale Highway location is where it all begins. It’s our first
        café, and the foundation for what we hope will become many more. We’re
        excited to start here and grow with the community.
      </p>
      <img
        src={assBatch}
        alt="Magnolia Bakery Front"
        className="about__image"
      />
      <h2 className="about__header">Our Secret</h2>
      <p className="about__text">
        Our secret, is simple: Bake with love. And love every day. Come,
        experience and see for yourself why people visit us from all over
        California. You're gonna love our home baked stuffed cookies, cinnamon
        rolls, Grilled Cheese, Milkshakes, Mocktails...so much more.
      </p>
    </div>
  );
}

export default About;
