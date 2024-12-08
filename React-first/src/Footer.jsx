import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© Elchin Aliyev</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f2f2f2',
  },
};

export default Footer;
