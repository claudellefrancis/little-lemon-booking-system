import greekSalad from "../images/greekSalad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemonDessert from "../images/lemonDessert.jpg";

function Article() {
  return (
    <article className="specials">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
      </div>

      <div className="specials-cards">

        <article className="card">
          <img src={greekSalad} alt="greek-salad" />

          <div className="card-content">
            <div className="card-title">
              <h3>Greek Salad</h3>
              <span>$12.99</span>
            </div>

            <p>
              The famous greek salad of crispy lettuce, peppers,
              olives and our Chicago style feta cheese.
            </p>

            <h4>Order a delivery 🚴</h4>
          </div>
        </article>

        <article className="card">
          <img src={bruchetta} alt="bruchetta" />

          <div className="card-content">
            <div className="card-title">
              <h3>Bruchetta</h3>
              <span>$5.99</span>
            </div>

            <p>
              Our Bruchetta is made from grilled bread that has
              been smeared with garlic and seasoned with salt and olive oil.
            </p>

            <h4>Order a delivery 🚴</h4>
          </div>
        </article>

        <article className="card">
          <img src={lemonDessert} alt="lemon-dessert"/>

          <div className="card-content">
            <div className="card-title">
              <h3>Lemon Dessert</h3>
              <span>$5.00</span>
            </div>

            <p>
              This comes straight from grandma's recipe book,
              every last ingredient has been sourced and is authentic.
            </p>

            <h4>Order a delivery 🚴</h4>
          </div>
        </article>
      </div>
    </article>
  );
}

export default Article;