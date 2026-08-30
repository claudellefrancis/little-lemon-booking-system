import restaurantFood from "../images/restaurantFood.jpg";
import greekSalad from "../images/greekSalad.jpg";
import bruschetta from "../images/bruschetta.png";
import lemonDessert from "../images/lemonDessert.jpg"

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a
            modern twist.
          </p>

          <button>Reserve a Table</button>
        </div>

        <div className="hero-image">
          {restaurantFood}
        </div>
      </section>

      <section className="specials">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <button>Online Menu</button>
        </div>

        <div className="cards">
            <article className="card">
                {greekSalad}

            <div className="card-header">
              <h3>Greek Salad</h3>
              <span>$12.99</span>
            </div>

            <p>
              The famous greek salad of crispy lettuce,
              peppers, olives and our Chicago style feta
              cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>

            <p>Order a delivery 🛵</p>
          </article>

          <article className="card">
            {bruschetta}

            <div className="card-header">
              <h3>Bruschetta</h3>
              <span>$5.99</span>
            </div>

            <p>
              Our Bruschetta is made from grilled bread
              that has been smeared with garlic and
              seasoned with salt and olive oil.
            </p>

            <p>Order a delivery 🛵</p>
          </article>

          <article className="card">
            {lemonDessert}

            <div className="card-header">
              <h3>Lemon Dessert</h3>
              <span>$5.00</span>
            </div>

            <p>
              This comes straight from grandma's recipe
              book, every last ingredient has been sourced
              and is as authentic as can be imagined.
            </p>

            <p>Order a delivery 🛵</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default HomePage;