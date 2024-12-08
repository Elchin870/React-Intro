import React from 'react';

function Main({ goods }) {
  return (
    <main style={styles.main}>
      {goods.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.url} alt={item.product_name} style={styles.image} />
          <h3>{item.product_name}</h3>
          <p>{item.product_description}</p>
          <p style={styles.price}>{item.product_price.toLocaleString()} руб.</p>
        </div>
      ))}
    </main>
  );
}

const styles = {
  main: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  price: {
    fontWeight: 'bold',
  },
};

export default Main;
