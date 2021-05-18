/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// importing components
import Navbar from '../layout/navbar/Navbar';

const ProductsPage = () => {
  // Component State
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Side effects
  useEffect(() => {
    let cancel;

    const fetchData = async () => {
      setLoading(true);

      try {
        const { data } = await axios({
          method: 'GET',
          url: `api/v1/products`,
          cancelToken: new axios.CancelToken((c) => {
            cancel = c;
          }),
        });

        setProducts(data.data);
        setLoading(false);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <h1>PRODUCTS</h1>
        {/* Filtering and Sorting Section */}

        {/* Products Listing */}
        <div className="grid">
          {loading ? (
            <div className="loader" />
          ) : (
            products.map((product) => (
              <div className="card" key={product._id}>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div className="flex">
                  <span>{product.rating}</span>
                  <span>{product.price}€</span>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
