import restaurantFood from "../images/restaurantFood.jpg";

function Section() {
    return (
       <section className="hero">

        <div className="hero-text">

          <h1>Little Lemon Restaurant</h1>
          <h2>Chicago</h2>

          <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>

          <button>Reserve a Table</button>

        </div>

        <img
        src={restaurantFood}
        alt="Restaurant food"
        className="hero-image"
        />
      </section>
    );

    <section className="testimonials">
      <h2>Testimonials</h2>

      {/* customer cards */}
    </section>
}

export default Section;