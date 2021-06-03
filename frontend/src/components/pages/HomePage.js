/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Card, Loader, QueryArea } from '../layout';

const HomePage = () => {
  // Component State
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Side effects
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let cancel;

    const fetchData = async () => {
      setLoading(true);

      try {
        const { data } = await axios({
          method: 'GET',
          url: 'api/v1/products',
          cancelToken: new axios.CancelToken((c) => {
            cancel = c;
          }),
        });

        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Filtering and Sorting Section */}
      <QueryArea loading={loading} />
      {/* Products Listing */}
      {loading ? (
        <Loader />
      ) : (
        <Card products={products} iconAuth="User Interface" />
      )}
    </>
  );
};

export default HomePage;
