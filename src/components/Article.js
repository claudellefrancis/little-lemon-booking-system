import greekSalad from "../images/greekSalad.jpg";
import bruschetta from "../images/bruschetta.svg";
import lemonDessert from "../images/lemonDessert.jpg";

function Article() {
  return (
    <article className="specials">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
      </div>

      <div className="specials-cards">
        <div className="card">
          <img src=ad}

          <div className="card-content">
            <div className="card-heading">
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
            </div>

            <p>
              The famous greek salad of crispy lettuce, peppers,
              olives and our Chicago style feta cheese.
            </p>

            <h4>Order a delivery 🚴</h4>
          </div>
        </div>

        <div className="card">
          {bruschetta}

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

        <div className="card">
          {lemonDessert}

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
    </article>
  );
}

export default Article;