import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Интерьер</h1>     
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: '10px 20px',
  },
  select: {
    padding: '5px',
  },
};

export default Header;
