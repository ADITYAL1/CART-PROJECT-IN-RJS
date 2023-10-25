import React from 'react';

const Navbar = (props) => {
  console.log('props', props);
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img src="https://th.bing.com/th?id=OIP.Z47q3vYwNo7ayWH6wj5GUwHaGw&w=261&h=238&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" style={styles.cartIcon} />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    height: 70,
    background:  '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount:  {
    background: 'yellow',
    borderRadius: '50%',
    padding:  '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};

export default Navbar;