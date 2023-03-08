import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Featured products </h1>
      <div className="products">
        {data.products.map((product) => (
          <div key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <Link to={`/product/${product.slug}`}>
              <p>{product.name}</p>
            </Link>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
