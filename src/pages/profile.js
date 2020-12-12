import React, { useEffect, useState } from 'react';
import { products } from '../services';

const Profile = () => {
  const [productsList, setProductList] = useState([]);
  const [name, setName] = useState('');
  const [num, setNum] = useState(10);

  function fetchData(limit, search) {
    products.products(limit, search).then((res) => {
      if (res.status === 200) {
        setProductList(res.data);
      }
    });
  }

  useEffect(() => {
    fetchData(10, '');
  }, []);

  return (
    <div style={{ margin: '1rem' }}>
      <h1>Products</h1>
      <input
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
        style={{ marginRight: '5px', width: '40px' }}
        type="number"
      />
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        style={{ marginBottom: '1rem', marginRight: '5px' }}
        type="text"
        placeholder="Looking for something?"
      />
      <button
        onClick={() => {
          fetchData(num, name);
        }}
        type="button"
      >
        Search
      </button>
      {productsList === [] ?
        '' :
        productsList.map((e) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: '1rem',
                }}
              >
                <span style={{ fontWeight: '700' }}>{e.name}</span>
                <span>{e.description}</span>
                <span>
                  Harga:
                  {e.display_price}
                </span>
              </div>
            );
          })}
    </div>
  );
};

export default Profile;
