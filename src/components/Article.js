import greekSalad from "../images/greekSalad.jpg";
import bruschetta from "../images/bruschetta.png";
import lemonDessert from "../images/lemonDessert.jpg";

function Article() {
  return (
    <section className="specials-section">

      {/* Specials heading */}
      <div className="specials-header">
        <h2>This week's specials!</h2>

        <button>Online Menu</button>
      </div>

      {/* Cards */}
      <div className="specials-cards">

        {/* Greek Salad */}
        <div className="card">

          <img
            src={greekSalad}
            alt="Greek Salad"
          />

          <div className="card-content">

            <div className="card-heading">
              <h3>Greek salad</h3>
              <span className="price">$12.99</span>
            </div>

            <p>
              The famous greek salad of crispy lettuce,
              peppers, olives and our Chicago style feta cheese.
            </p>

            <h4>Order a delivery 🚴</h4>

          </div>
        </div>


        {/* Bruschetta */}
        <div className="card">

          <img
            src={bruschetta}
            alt="Bruschetta"
          />

          <div className="card-content">

            <div className="card-heading">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
            </div>

            <p>
              Our Bruschetta is made from grilled bread that has
              been smeared with garlic and seasoned with salt and olive oil.
            </p>

            <h4>Order a delivery 🚴</h4>

          </div>
        </div>


        {/* Lemon Dessert */}
        <div className="card">

          <img
            src={lemonDessert}
            alt="Lemon Dessert"
          />

          <div className="card-content">

            <div className="card-heading">
              <h3>Lemon Dessert</h3>
              <span className="price">$5.00</span>
            </div>

            <p>
              This comes straight from grandma's recipe book,
              every last ingredient has been sourced and is authentic.
            </p>

            <h4>Order a delivery 🚴</h4>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Article;